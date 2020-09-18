import { PizzaFactory } from './../abstractions/pizza.factory';
import { PizzaVeggie } from './../products/pizza-veggie';

export class PizzaVeggieFactory extends PizzaFactory<PizzaVeggie> {

    constructor(toppings: string[]) {
        super(new PizzaVeggie(toppings));
    }

}