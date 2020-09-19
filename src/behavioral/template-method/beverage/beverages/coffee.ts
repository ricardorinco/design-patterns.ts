import { CaffeineBeverage } from './../abstractions/caffeine-beverage.template';

export class Coffee extends CaffeineBeverage {

    protected brew(): void {
        console.log('Dripping coffee through filter');
    }

    protected addCondiments(): void {
        console.log('Adding sugar and milk');
    }

}