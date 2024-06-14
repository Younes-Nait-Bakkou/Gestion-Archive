<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\HasApiTokens;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        $data = [
            'status'=>200,
            'students'=>$students
        ];

        return response()->json($data, $data['status']);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required'
        ]);

        if($validator->fails()){

            $data = [
                "data"=> $validator->messages(),
                "status"=>422
            ];

            return response()->json($data,$data['status']);

        }else{

            $student = Student::create([
                'name'=>$request->input('name')
            ]);
            

            $data = [
                "student"=> $student,
                "status"=>201
            ];

            return response()->json($data,$data['status']);
        }
    }
    public function show(Student $student){

        $data = [
            'status'=>200,
            'student'=>$student
        ];
        return response()->json($data,$data['status']);
    }

    public function update(Request $request, Student $student){


        $validator = Validator::make($request->all(),[
            'name'=>'required'
        ]);

        if($validator->fails()){

            $data = [
                'status'=>422,
                'student'=> $validator->messages()
            ];

            return response()->json($data,422);

        }else{

            $student->update([
                'name'=>$request->input('name')
            ]);

            $data = [
                'status'=>200,
                'student'=> $student
            ];

            return response()->json($data,200);
        }
        
    }
    public function destroy(Student $student){

        $student->delete();
    
        $data = [
            'status'=>200,
            'student'=> 'data successfully deleted'
        ];

        if ($student->wasRecentlyDeleted()) {
            return response()->json($data, 200);
        } else {

            return response()->json($data, 500);
        }
        
    }
        
    
}
