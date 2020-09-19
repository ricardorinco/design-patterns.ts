import { Coffee } from './beverages/coffee';
import { CoffeeHook } from './beverages/coffee-hook';
import { Tea } from './beverages/tea';
import { TeaHook } from './beverages/tea-hook';

const coffee = new Coffee();
coffee.prepareRecipe();
console.log('\n\n');

const tea = new Tea();
tea.prepareRecipe();
console.log('\n\n');

const coffeeHook = new CoffeeHook(false);
coffeeHook.prepareRecipe();
console.log('\n\n');

const teaHook = new TeaHook(true);
teaHook.prepareRecipe();