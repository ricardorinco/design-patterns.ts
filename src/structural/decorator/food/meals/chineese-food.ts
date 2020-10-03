import { Food } from './../interfaces/food';
import { FoodDecorator } from './food-decorator';

export class ChineeseFood extends FoodDecorator {
    
    constructor(newFood: Food) {
        super(newFood);
    }
    
    public prepare(): string {
        return `${super.prepare()} With Fried Rice and Manchurian`;
    }

    public price(): number {
        return super.price() + 65.0;
    }
}
