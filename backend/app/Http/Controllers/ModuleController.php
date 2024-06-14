<?php

namespace App\Http\Controllers;

use App\Http\Resources\ModuleResource;
use App\Models\Groupe;
use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ModuleController extends Controller
{
    /* ---------------- CRUD Functions ---------------- */

    public function index(){        
        return ModuleResource::collection(Module::paginate(10)->onEachSide(2));    
    }
    
    public function recent(){
        return ModuleResource::collection(Module::latest()->limit(5)->get());
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            "code" => 'required|string|max:255',
            "intitule" => 'required|string|max:255',
            "regional" => 'required|boolean',
            "masseHoraireP" => 'required|numeric|min:0',
            "masseHoraireFAD" => 'required|numeric|min:0',
            "anneeFormation" => 'required|digits:4|integer|min:1900|max:' . date('Y'),
            "semestre" => 'required|in:1,2'
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }else{

            $Module = Module::create([
                'name'=>$request->input('name')
            ]);

            return ModuleResource::collection($Module);
        }
    }

    public function show(Module $module){
        $module->includesDetails = true;
        return ModuleResource::make($module);
    }
    
    public function update(Request $request, Module $module){

        $validator = Validator::make($request->all(), [
            "code" => 'required|string|max:255',
            "intitule" => 'required|string|max:255',
            "regional" => 'required|boolean',
            "masseHoraireP" => 'required|numeric|min:0',
            "masseHoraireFAD" => 'required|numeric|min:0',
            "anneeFormation" => 'required|digits:4|integer|min:1900|max:' . date('Y'),
            "semestre" => 'required|in:1,2',
            "status" => 'required|in:in progress,on hold,archived,opened',
            "datePrevueEFM" => 'required_if:status,in progress|date_format:Y-m-d|before_or_equal:' . date('Y-m-d'), 
            "dateEFM" => 'nullable|required_unless:status,in progress|date_format:Y-m-d|before_or_equal:' . date('Y-m-d')
        ]);
        
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }else{
            $module->updateOrFail($request->all());
            return response()->json($module);
        }
        
    }

    public function destroy(Module $module){

        $module->delete();
    
        $data = [
            'status'=>200,
            'student'=> 'data successfully deleted'
        ];

        if ($module->wasRecentlyDeleted()) {
            return response()->json($data, 200);
        } else {

            return response()->json($data, 500);
        }
        
    }


    /* ---------------- Custom Functions ---------------- */

    /* ---------------- Modules Dashboard Statistics ----------------*/

    public function getModulesStats(){
        $totalModules = Module::count();
        $statuses = ['in progress', 'on hold', 'archived', 'opened'];
        
        $statusData = Module::selectRaw('status, COUNT(*) as count, MAX(updated_at) as last_updated')
                            ->groupBy('status')
                            ->get();

        $statistics = [];
        foreach ($statuses as $status) {
            $data = $statusData->firstWhere('status', $status);
            $count = $data ? $data->count : 0;
            $lastUpdated = $data ? $data->last_updated : null;
            $percentage = $totalModules ? ($count / $totalModules) * 100 : 0;
            $statistics[] = [
                'status' => $status,
                'count' => $count,
                'percentage' => $percentage,
                'last_updated' => $lastUpdated
            ];
        }

        return response()->json($statistics);
    }

    /* ---------------- Modules Select Options ----------------*/

    public function getFiliereOptions(){
        $result = Groupe::pluck('filiere')->unique();
        $options = [];
        foreach ($result as $value) {
            $options[] = [
                'label' => $value,
                'value' => $value
            ];
        }
        return response()->json($options);
    }

    public function getGroupeOptions(){
        $filiere = request()->query('filiere');
        $result = Groupe::where('filiere','=',$filiere)->pluck('id','intitule');
        $options = [];
        foreach ($result as $key => $value) {
            $options[] = [
                'label' => $key,
                'value' => $value
            ];
        }
        return response()->json($options);
    }

    public function getModuleOptions(){
        $groupeId = request()->query('groupe');
        $result = Module::where('groupe_id','=',$groupeId)->pluck('id','intitule');
        $options = [];
        foreach ($result as $key => $value) {
            $options[] = [
                'label' => $key,
                'value' => $value
            ];
        }
        return response()->json($options);
    }

    /* ---------------- Modules Actions ----------------*/

    public function onHold(Module $module) {
        $payload = request()->json()->all();

        if (!empty($payload)) {
            
            $module->updateOrFail([
                'dateEFM' => $payload['dateEFM'],
                'EFM' => true,
                'modulesDossiers' => null,
                'nombreCopies' => null,
                'emplacementArchiv' => null,
                'motif' => null,
                'demandeur' => null,
                'dateOuverture' => null,
                'datePrevueRetour' => null,
                'dateRetour' => null,
                'remarques' => null,
                'status' => 'on hold'
            ]);

            return response()->json(['message' => 'Module updated successfully','data'=>$module]);
        } else {
            return response()->json(['error' => 'Payload is empty'], 400);
        }
    }
    

    public function archive(Module $module){
        $payload = request()->json()->all();
    
        if (!empty($payload)) {
            
            if($module->status === 'on hold'){
                $module->updateOrFail([
                    'modulesDossiers' => $payload['modulesDossiers'],
                    'nombreCopies' => $payload['nombreCopies'],
                    'emplacementArchiv' => $payload['emplacementArchiv'],
                    'status' => 'archived'
                ]);
            }else{
                $module->updateOrFail([
                    'modulesDossiers' => $payload['modulesDossiers'],
                    'nombreCopies' => $payload['nombreCopies'],
                    'emplacementArchiv' => $payload['emplacementArchiv'],
                    'dateRetour' => $payload['dateRetour'],
                    'status' => 'archived'
                ]);
            }

            return response()->json(['message' => 'Module updated successfully','data'=>$module]);
        } else {
            return response()->json(['error' => 'Payload is empty'], 400);
        }
    }

    public function open(Module $module){
        $payload = request()->json()->all();

        if (!empty($payload)) {

            $module->updateOrFail([
                'motif' => $payload['motif'],
                'demandeur' => $payload['demandeur'],
                'dateOuverture' => $payload['dateOuverture'],
                'datePrevueRetour' => $payload['datePrevueRetour'],
                'remarques' => $payload['remarques'],
                'status' => 'opened'
            ]);

            return response()->json(['message' => 'Module updated successfully','data'=>$module]);
        } else {
            return response()->json(['error' => 'Payload is empty'], 400);
        }
    }
}
