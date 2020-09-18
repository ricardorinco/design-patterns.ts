import { PizzaBase } from './../abstractions/pizza-base';


export class PizzaClam extends PizzaBase {
    
    constructor(toppings: string[]) {
        super(
            'Clam Pizza',
            'Thin crust',
            'White Garlic Sauce',
            toppings
        );
    }

    protected additionalInfos(): void { }

}