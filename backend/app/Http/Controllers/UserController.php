<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::paginate(10)->onEachSide(2));
    }

    /**
     * Display a detailed listing of the resource.
     */
    public function view()
    {
        return UserResource::collection(User::paginate(4)->onEachSide(2));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'data' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $user = User::create([
                'name' => $request->input('name')
            ]);
            return new UserResource($user);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $user->includesDetails = true;
        return new UserResource($user);
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => 422,
                'user' => $validator->messages()
            ];
            return response()->json($data, 422);
        } else {
            $user->update([
                'name' => $request->input('name')
            ]);

            $data = [
                'status' => 200,
                'user' => $user
            ];
            return response()->json($data, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        $data = [
            'status' => 200,
            'message' => 'Data successfully deleted'
        ];

        if ($user->wasRecentlyDeleted()) {
            return response()->json($data, 200);
        } else {
            return response()->json(['status' => 500, 'message' => 'Failed to delete'], 500);
        }
    }
}
