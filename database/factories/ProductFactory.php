<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->text(30),
            'brand'=>fake()->text(30),
            'price'=>fake()->numberBetween(500, 2000),
            'description'=>fake()->text,
        ];
    }
}
