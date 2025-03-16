<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function deleteUser($id){
        
        $deleted = DB::table('users')->where("id", $id)->delete();

        if($deleted){
            return response()->json([
                "message"=>"Successfully Deleted"
            ], 200);
        }

        return response()->json([
            "message"=> "Record not found"
        ], 404);
        
    }

    public function updateUser($id, Request $request){

        try{

            // $valildateFields = $this->validate($request, [
            //     'username' => 'required|string'
            // ]);

            $data = [
                
                "name"=> $request->name,
                
            ];
            $affected = DB::table('users')->where("id", $id)->update($data);

            return response()->json([
                $affected
            ], 200);

        } catch(Exception $ex){
            return response()->json($ex);
        }
    }

    public function createUser(Request $request) {

        try{
            $valildateFields = $this->validate($request, [
                'username' => 'required|string',
                'password' => 'required|string'
            ]);
        
            $user = DB::table('users')->where('username', $request->username)->first();

            if($user){
                return response()->json([
                    "error"=> "username already exist"
                ], 422);
            }
        
            $data = [
                "username"=> $request->username,
                "password"=> $request->password,
                "name"=> $request->name,
                "age"=> $request->age,
                "address"=> $request->address
            ];

            $table= DB::table('users')->insert($data);

            return response()->json($table);

    } catch(Exception $ex){
        return response()->json([
            $ex
        ]);
    }
    }
    public function login(Request $request)
    {

        try{
            $valildateFields = $this->validate($request, [
                'username' => 'required|string',
                'password' => 'required|string'
            ]);
    
            $user = DB::table('users')->where('username', $request->username)->where('password', $request->password)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        return response()->json([
            'message' => "Welcome $user->name",
            'user' => $user
        ], 200);
    

        } catch(Exception $ex){
            return response()->json([
                $ex
            ]);
        }
        
        
}
}