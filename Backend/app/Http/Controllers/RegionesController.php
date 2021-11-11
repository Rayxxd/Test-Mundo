<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Region;


class RegionesController extends Controller
{
    //
    public function index()
    {
        try {
            $region = Region::all();
        
            return response()->json([
                'status' => 200,
                'regiones' => $region
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500
            ]);
        }
        
    }

    
}
