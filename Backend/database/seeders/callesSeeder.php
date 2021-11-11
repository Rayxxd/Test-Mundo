<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Calle;

class callesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Santiago
        //Macul
        Calle::create(['nombre' => 'Abedul', 'ciudad_id' => 1]);
        Calle::create(['nombre' => 'Adolfo Arenas', 'ciudad_id' => 1]);
        Calle::create(['nombre' => 'Alberto Galleguillos', 'ciudad_id' => 1]);
        Calle::create(['nombre' => 'Alejandro Flores', 'ciudad_id' => 1]);
        Calle::create(['nombre' => 'Alejandro Galaz', 'ciudad_id' => 1]);
        //Maipu
        Calle::create(['nombre' => '1 de Enero', 'ciudad_id' => 2]);
        Calle::create(['nombre' => '1 de Mayo', 'ciudad_id' => 2]);
        Calle::create(['nombre' => '1 de Noviembre', 'ciudad_id' => 2]);
        Calle::create(['nombre' => '1 Sur', 'ciudad_id' => 2]);
        Calle::create(['nombre' => '10 de Mayo', 'ciudad_id' => 2]);
        //Maria Pinto
        Calle::create(['nombre' => 'Diego Portales', 'ciudad_id' => 3]);
        Calle::create(['nombre' => 'callejon el lirano', 'ciudad_id' => 3]);
        Calle::create(['nombre' => 'camino interior avenida principal', 'ciudad_id' => 3]);
        Calle::create(['nombre' => 'camino Interior Principal', 'ciudad_id' => 3]);
        Calle::create(['nombre' => 'El Rosario', 'ciudad_id' => 3]);
        //Melipilla
        Calle::create(['nombre' => 'El Laurel', 'ciudad_id' => 4]);
        Calle::create(['nombre' => 'El Litre', 'ciudad_id' => 4]);
        Calle::create(['nombre' => 'El Manio', 'ciudad_id' => 4]);
        Calle::create(['nombre' => 'El Mirador', 'ciudad_id' => 4]);
        Calle::create(['nombre' => 'El Morro', 'ciudad_id' => 4]);
        //Ñuñoa
        Calle::create(['nombre' => 'Gerona', 'ciudad_id' => 5]);
        Calle::create(['nombre' => 'Graciela', 'ciudad_id' => 5]);
        Calle::create(['nombre' => 'Guadalquivir', 'ciudad_id' => 5]);
        Calle::create(['nombre' => 'Guarquén', 'ciudad_id' => 5]);
        Calle::create(['nombre' => 'Guggenhein', 'ciudad_id' => 5]);

        





        




        






        








    }
}
