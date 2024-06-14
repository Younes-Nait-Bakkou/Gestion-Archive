<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use Illuminate\Http\Request;
use App\Http\Resources\FormateurResource;
use Illuminate\Support\Facades\Validator;

class FormateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return FormateurResource::collection(Formateur::paginate(10)->onEachSide(2));
    }

    /**
     * Display a detailed listing of the resource.
     */
    public function view()
    {
        return FormateurResource::collection(Formateur::paginate(4)->onEachSide(2));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'prenom' => 'required|string|max:255',
            'nom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'telephone' => 'required|string|max:15', 
        ]);

        if ($validator->fails()) {
            $data = [
                'data' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $formateur = Formateur::create($validator->validated());
            return new FormateurResource($formateur);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Formateur $formateur)
    {
        return new FormateurResource($formateur);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Formateur $formateur)
    {
        $validator = Validator::make($request->all(),[
            'prenom' => 'required|string|max:255',
            'nom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'telephone' => 'required|string|max:15', 
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => 422,
                'messages' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $formateur->update($validator->validated());

            $data = [
                'status' => 200,
                'data' => $formateur
            ];
            return response()->json($data, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formateur $formateur)
    {
        $formateur->delete();

        $data = [
            'status' => 200,
            'message' => 'Data successfully deleted'
        ];

        if ($formateur->wasRecentlyDeleted()) {
            return response()->json($data, 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Failed to delete'], 500);
        }
    }
}
