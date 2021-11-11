<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ciudad;

class CiudadesController extends Controller
{
    public function ciudades($id)
    {
        try {
            $ciud =  Ciudad::where('provincia_id',$id)->get();
            return response()->json([
                'status' => 200,
                'ciudades' => $ciud
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }
}
