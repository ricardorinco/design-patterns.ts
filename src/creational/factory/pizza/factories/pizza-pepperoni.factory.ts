import { PizzaFactory } from './../abstractions/pizza.factory';
import { PizzaPepperoni } from './../products/pizza-pepperoni';

export class PizzaPepperoniFactory extends PizzaFactory<PizzaPepperoni> {

    constructor(toppings: string[]) {
        super(new PizzaPepperoni(toppings));
    }

}