import { Food } from './../interfaces/food';
import { FoodDecorator } from './food-decorator';

export class NonVegFood extends FoodDecorator {
    
    constructor(newFood: Food) {
        super(newFood);
    }
    
    public prepare(): string {
        return `${super.prepare()} With Roasted Chiken and Chiken Curry`;
    }

    public price(): number {
        return super.price() + 150.0;
    }
}
