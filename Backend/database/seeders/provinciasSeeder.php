<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Provincia;

class provinciasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Provincia::create(['nombre' => 'Santiago', 'region_id' => 1]);
        Provincia::create(['nombre' => 'Talagante', 'region_id' => 1]);
        Provincia::create(['nombre' => 'Talca', 'region_id' => 2]);
        Provincia::create(['nombre' => 'Linares', 'region_id' => 2]);
        Provincia::create(['nombre' => 'Arauco', 'region_id' => 3]);
        Provincia::create(['nombre' => 'Concepción', 'region_id' => 3]);

    }
}
