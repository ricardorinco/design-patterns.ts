import { PizzaClam } from './../products/pizza-clam';
import { PizzaFactory } from './../abstractions/pizza.factory'

export class PizzaClamFactory extends PizzaFactory<PizzaClam> {

    constructor(toppings: string[]) {
        super(new PizzaClam(toppings));
    }

}