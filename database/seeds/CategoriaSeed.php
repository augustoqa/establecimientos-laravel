<?php

use App\Categoria;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CategoriaSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Categoria::create([
            'nombre' => 'Restaurant',
            'slug' => Str::slug('Restaurant'),
        ]);

        Categoria::create([
            'nombre' => 'Café',
            'slug' => Str::slug('Café'),
        ]);

        Categoria::create([
            'nombre' => 'Hotel',
            'slug' => Str::slug('Hotel'),
        ]);

        Categoria::create([
            'nombre' => 'Bar',
            'slug' => Str::slug('Bar'),
        ]);

        Categoria::create([
            'nombre' => 'Hospital',
            'slug' => Str::slug('Hospital'),
        ]);

        Categoria::create([
            'nombre' => 'Gimnasio',
            'slug' => Str::slug('Gimnasio'),
        ]);
    }
}
