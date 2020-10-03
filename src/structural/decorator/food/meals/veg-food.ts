import { Food } from './../interfaces/food';

export class VegFood implements Food {
    
    public prepare(): string {
        return 'Veg Food';
    }
  
    public price(): number {
        return 50.0;
    }

}  
