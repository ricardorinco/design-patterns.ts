import { CaffeineBeverage } from './../abstractions/caffeine-beverage.template';

export class Tea extends CaffeineBeverage {

    protected brew(): void {
        console.log('Steeping the tea');
    }

    protected addCondiments(): void {
        console.log('Adding lemon');
    }

}