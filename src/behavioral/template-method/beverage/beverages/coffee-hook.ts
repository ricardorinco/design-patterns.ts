import { CaffeineBeverageHook } from './../abstractions/caffeine-beverage-hook.template';

export class CoffeeHook extends CaffeineBeverageHook {

    private _customerWantsCondiments: boolean;

    constructor(condiments: boolean = true) {
        super();

        this._customerWantsCondiments = condiments;
    }

    protected brew(): void {
        console.log('Dripping coffee through filter');
    }

    protected addCondiments(): void {
        console.log('Adding sugar and milk');
    }

    public customerWantsCondiments(): boolean {
        return this._customerWantsCondiments;
    }

}