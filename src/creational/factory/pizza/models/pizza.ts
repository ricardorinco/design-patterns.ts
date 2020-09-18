import { Doughs } from './types/doughs.type';
import { Sauces } from './types/sauces.type';

export abstract class Pizza {

    public name: string;

    public dough: Doughs;

    public sauce: Sauces;

    public toppings: string[] = [];

    
    protected abstract prepare(): void;

    protected abstract bake(): void;

    protected abstract cut(): void;

    protected abstract pack(): void;

}