import { PizzaBase } from './../abstractions/pizza-base';

export class PizzaVeggie extends PizzaBase {

    constructor(toppings: string[]) {
        super(
            'Veggie Pizza',
            'Crust',
            'Marinara Pizza Sauce',
            toppings
        );
    }

    protected additionalInfos(): void {
        console.log('--- ADDITIONAL INFO ---');
        console.log('Certification - Vegan Action');
        console.log('\n');
    }

}