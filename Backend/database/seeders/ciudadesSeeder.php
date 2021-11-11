<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Ciudad;

class ciudadesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Santiago
        Ciudad::create(['nombre' => 'Macul', 'provincia_id' => 1]);
        Ciudad::create(['nombre' => 'Maipú', 'provincia_id' => 1]);
        Ciudad::create(['nombre' => 'María Pinto', 'provincia_id' => 1]);
        Ciudad::create(['nombre' => 'Melipilla', 'provincia_id' => 1]);
        Ciudad::create(['nombre' => 'Ñuñoa', 'provincia_id' => 1]);
        //Talagnte
        Ciudad::create(['nombre' => 'El Monte', 'provincia_id' => 2]);
        Ciudad::create(['nombre' => 'Isla de Maipo', 'provincia_id' => 2]);
        Ciudad::create(['nombre' => 'Padre Hurtado', 'provincia_id' => 2]);
        Ciudad::create(['nombre' => 'Peñaflor', 'provincia_id' => 2]);
        Ciudad::create(['nombre' => 'Talagante', 'provincia_id' => 2]);
        //Talca
        Ciudad::create(['nombre' => 'Pencahue', 'provincia_id' => 3]);
        Ciudad::create(['nombre' => 'Río Claro', 'provincia_id' => 3]);
        Ciudad::create(['nombre' => 'San Clemente', 'provincia_id' => 3]);
        Ciudad::create(['nombre' => 'San Rafael', 'provincia_id' => 3]);
        Ciudad::create(['nombre' => 'Talca', 'provincia_id' => 3]);
        //Linares
        Ciudad::create(['nombre' => 'Linares', 'provincia_id' => 4]);
        Ciudad::create(['nombre' => 'Longaví', 'provincia_id' => 4]);
        Ciudad::create(['nombre' => 'Parral', 'provincia_id' => 4]);
        Ciudad::create(['nombre' => 'San Javier', 'provincia_id' => 4]);
        Ciudad::create(['nombre' => 'Villa Alegre', 'provincia_id' => 4]);
        //Arauco
        Ciudad::create(['nombre' => 'Arauco', 'provincia_id' => 5]);
        Ciudad::create(['nombre' => 'Cañete', 'provincia_id' => 5]);
        Ciudad::create(['nombre' => 'Contulmo', 'provincia_id' => 5]);
        Ciudad::create(['nombre' => 'Lebu', 'provincia_id' => 5]);
        Ciudad::create(['nombre' => 'Los Álamos', 'provincia_id' => 5]);
        //Concepcion
        Ciudad::create(['nombre' => 'Concepción', 'provincia_id' => 6]);
        Ciudad::create(['nombre' => 'Chiguayante', 'provincia_id' => 6]);
        Ciudad::create(['nombre' => 'Hualpén', 'provincia_id' => 6]);
        Ciudad::create(['nombre' => 'San Pedro de la Paz', 'provincia_id' => 6]);
        Ciudad::create(['nombre' => 'Talcahuano', 'provincia_id' => 6]);

   
    }
}
