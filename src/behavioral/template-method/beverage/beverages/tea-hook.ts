import { CaffeineBeverageHook } from './../abstractions/caffeine-beverage-hook.template';

export class TeaHook extends CaffeineBeverageHook {

    private _customerWantsCondiments: boolean;

    constructor(condiments: boolean = true) {
        super();

        this._customerWantsCondiments = condiments;
    }

    protected brew(): void {
        console.log('Steeping the tea');
    }

    protected addCondiments(): void {
        console.log('Adding lemon');
    }

    public customerWantsCondiments(): boolean {
        return this._customerWantsCondiments;
    }

}