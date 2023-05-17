<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Hendry Suryadi arya',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('adminadmin'),
            'role' => 'admin',
            'employee_id' => 'AD001',
            'address' => 'Jl. Raya Puncak Km. 77, Cisarua, Bogor, Jawa Barat 16750',
            'phone' => '08123456789',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Ketut Mahendra',
            'email' => 'manager@gmail.com',
            'password' => bcrypt('managermanager'),
            'role' => 'manager',
            'employee_id' => 'E001',
            'address' => 'Jl. Raaya Denpasar Barat no.33, Jawa Barat 16750',
            'phone' => '08127362tygh',
        ]);
        \App\Models\User::factory(10)->create();
        \App\Models\Pond::factory()->create([
            'name' => 'Pond 1',
            'area' => '1000',
            'shrimpbreed' => 'Black Tiger',
            'tonnage' => '1000',
        ]);
        \App\Models\Pond::factory()->create([
            'name' => 'Pond 2',
            'area' => '2000',
            'shrimpbreed' => 'King Prawn',
            'tonnage' => '2000',
        ]);

        \App\Models\Pond::factory()->create([
            'name' => 'Pond 3',
            'area' => '3000',
            'shrimpbreed' => 'Black Tiger',
            'tonnage' => '3000',
        ]);

        \App\Models\Pond::factory()->create([
            'name' => 'Pond 4',
            'area' => '4000',
            'shrimpbreed' => 'Vannamei',
            'tonnage' => '4000',
        ]);

        \App\Models\Pond::factory()->create([
            'name' => 'Pond 5',
            'area' => '5000',
            'shrimpbreed' => 'Black Tiger',
            'tonnage' => '5000',
        ]);
        \App\Models\Pond::factory()->create([
            'name' => 'Pond 6',
            'area' => '6000',
            'shrimpbreed' => 'Whiteleg',
            'tonnage' => '6000',
        ]);
    

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
    }
}
