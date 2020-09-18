import { Pizza } from './../models/pizza';

export abstract class PizzaFactory<TPizza extends Pizza> {

    protected pizza: TPizza;

    constructor(pizza: TPizza) {
        this.pizza = pizza;
    }

    public createPizza() {
        return this.pizza;
    }

}