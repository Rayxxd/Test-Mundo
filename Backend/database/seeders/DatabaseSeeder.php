<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $this->call( regionesSeeder::class );
        $this->call( provinciasSeeder::class );
        $this->call( ciudadesSeeder::class );
        $this->call( callesSeeder::class );
    }
}
