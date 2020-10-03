import { Food } from './../interfaces/food';

export abstract class FoodDecorator implements Food {
    
    private newFood: Food;

    constructor(newFood: Food) {
        this.newFood = newFood;
    }

    public prepare(): string {
        return this.newFood.prepare();
    }
  
    public price(): number {
        return this.newFood.price();
    }

}  
