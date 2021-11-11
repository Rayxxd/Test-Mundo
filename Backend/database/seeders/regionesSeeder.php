<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Region;

class regionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Region::create(['nombre' => 'Metropolitana']);
        Region::create(['nombre' => 'Maule']);
        Region::create(['nombre' => 'BioBío']); 
    }
}
