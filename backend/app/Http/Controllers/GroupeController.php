<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupeResource;
use App\Models\Groupe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GroupeController extends Controller
{
    public function index()
    {
        return GroupeResource::collection(Groupe::paginate(10)->onEachSide(2));
    }

    /**
     * Display a detailed listing of the resource.
     */
    public function view()
    {
        return GroupeResource::collection(Groupe::paginate(4)->onEachSide(2));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'intitule' => 'required|string',
            'filiere' => 'required|string',
            'secteur' => 'required|string',
            'anneeFormation' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'annee' => 'required|in:1,2,3',
            'effectif' => 'required|integer',
        ]);

        if ($validator->fails()) {
            $data = [
                'data' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $groupe = Groupe::create($validator->validated());
            return new GroupeResource($groupe);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Groupe $groupe)
    {
        return new GroupeResource($groupe);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Groupe $groupe)
    {
        $validator = Validator::make($request->all(),[
            'intitule' => 'required|string',
            'filiere' => 'required|string',
            'secteur' => 'required|string',
            'anneeFormation' => 'required|digits:4|integer|min:1900|max:' . (date('Y') + 1),
            'annee' => 'required|in:1,2,3',
            'effectif' => 'required|integer',
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => 422,
                'groupe' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $groupe->update($validator->validated());

            $data = [
                'status' => 200,
                'groupe' => $groupe
            ];
            return response()->json($data, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Groupe $groupe)
    {
        $groupe->delete();

        $data = [
            'status' => 200,
            'message' => 'Data successfully deleted'
        ];

        if ($groupe->wasRecentlyDeleted()) {
            return response()->json($data, 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Failed to delete'], 500);
        }
    }
}
