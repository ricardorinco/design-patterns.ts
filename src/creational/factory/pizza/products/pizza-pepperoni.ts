import { PizzaBase } from './../abstractions/pizza-base';

export class PizzaPepperoni extends PizzaBase {
    
    constructor(toppings: string[]) {
        super(
            'Pepperoni Pizza',
            'Crust',
            'Marinara Pizza Sauce',
            toppings
        );
    }

    protected additionalInfos(): void { };

}
   