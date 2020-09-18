import { PizzaClamFactory } from './factories/pizza-clam.factory';
import { PizzaPepperoniFactory } from './factories/pizza-pepperoni.factory';
import { PizzaVeggieFactory } from './factories/pizza-veggie.factory';

const pepperoniToppings = [
    'Sliced Pepperoni',
    'Sliced Onion',
    'Grated parmesan cheese'
];
const pizzaPepperoni = new PizzaPepperoniFactory(pepperoniToppings);
console.log(pizzaPepperoni.createPizza());
console.log('\n\n');

const veggieToppings = [
    'Shredded mozzarella',
    'Grated parmesan',
    'Diced onion',
    'Sliced mushrooms',
    'Sliced red pepper',
    'Sliced black olives'
];
const pizzaVeggie = new PizzaVeggieFactory(veggieToppings);
console.log(pizzaVeggie);

const clamToppings = ['Clams', 'Grated parmesan cheese'];
const pizzaClam = new PizzaClamFactory(clamToppings);
console.log(pizzaClam);