<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Calle;
use Illuminate\Support\Facades\Validator;

class CallesController extends Controller
{
    public function show($id)
    {
        try {
            $calle = Calle::find($id);
            
            return response()->json([
                'status' => 200,
                'calle' => $calle,
                'ciudad' => $calle->ciudad,
                'provincia' => $calle->ciudad->provincia,
                'region' => $calle->ciudad->provincia->region
            ]);
          
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500
            ]);
        }
    }

    public function store(Request $request)
    {
        $err = Validator::make($request->all(),[
            "name" => 'required|string',
            "ciudad" => 'required'
        ],[
            "name.required" => 'El campo nombre es obligatorio',
            "ciudad.required" => 'El campo ciudad es obligatorio'
        ]);
            
        if($err->fails()){
            
            return response()->json([
                'status' => 500,
                'error' => $err->errors()->first(),
            ]);
        }

        try {
            $calle = new Calle;
            $calle->nombre = $request->name;
            $calle->ciudad_id = $request->ciudad;
            $calle->save();

            return response()->json([
                'status' => 200,
                'message' => 'calle agregada'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'error' => 'Error 500',
            ]);
        }
        
    }

    public function calles($id_ciudad)
    {
        try {
            $calles =  Calle::where('ciudad_id',$id_ciudad)->get();
        
            return response()->json([
                'status' => 200,
                'calles' => $calles
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500
            ]);
        }
        
    }

    public function update(Request $request, $id)
    {
        $err = Validator::make($request->all(),[
            "name" => 'required|string',
            "ciudad" => 'required'
        ],[
            "name.required" => 'El campo nombre es obligatorio',
            "ciudad.required" => 'El campo ciudad es obligatorio'
        ]);
            
        if($err->fails()){
            
            return response()->json([
                'status' => 500,
                'error' => $err->errors()->first(),
            ]);
        }

        try {
            $calle = Calle::find($id);
            $calle->nombre = $request->name;
            $calle->ciudad_id = $request->ciudad;
            $calle->update();

            return response()->json([
                'status' => 200,
                'message' => 'Calle actualizada'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'error' => 'error 500',
            ]);
        }
        
    }
}
