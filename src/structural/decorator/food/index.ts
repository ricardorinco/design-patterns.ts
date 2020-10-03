import { Food } from './interfaces/food';
import { ChineeseFood } from './meals/chineese-food';
import { NonVegFood } from "./meals/non-veg-food";
import { VegFood } from "./meals/veg-food";

const vegFood = new VegFood();
console.log(vegFood.prepare());
console.log(vegFood.price());

console.log('\n');

const nonVegFood: Food = new NonVegFood(new VegFood() as Food);
console.log(nonVegFood.prepare());
console.log(nonVegFood.price());

console.log('\n');

const chineeseFood: Food = new ChineeseFood(new VegFood() as Food);
console.log(chineeseFood.prepare());
console.log(chineeseFood.price());