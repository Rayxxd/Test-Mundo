<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provincia;

class ProvinciasController extends Controller
{
    public function provincias($id)
    {
        try {
            $provi =  Provincia::where('region_id',$id)->get();
           
            return response()->json([
                'status' => 200,
                'provincias' => $provi
            ]);
            
        } catch (\Throwable $th) {
            //throw $th;
        }
        
    }
}
