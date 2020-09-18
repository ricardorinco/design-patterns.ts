import { Doughs } from './../models/types/doughs.type';
import { Pizza } from './../models/pizza';
import { Sauces } from './../models/types/sauces.type';

export abstract class PizzaBase extends Pizza {
    
    constructor(
        name: string,
        dough: Doughs,
        sauce: Sauces,
        toppings: string[]
    ) {
        super();

        this.name = name;
        this.dough = dough;
        this.sauce = sauce;
        this.toppings = toppings;
        
        this.additionalInfos();
        this.prepare();
    }

    protected abstract additionalInfos(): void;
    
    protected prepare(): void {
        console.log('Preparing', this.name);

        this.bake();
    }

    protected bake(): void {
        console.log('Baking', this.name);

        this.cut();
    }

    protected cut(): void {
        console.log('Cutting', this.name);
        
        this.pack();
    }

    protected pack(): void {
        console.log('Boxing', this.name);

        this.ticket();
    }
 
    private ticket() {
        let ticket = '';
        ticket = ticket.concat(`\n\n ---- ${this.name} ----\n`);
        ticket = ticket.concat(`${this.dough}\n`);
        ticket = ticket.concat(`${this.sauce}\n`);
        
        for (let i = 0; i < this.toppings.length; i++) {
            ticket = ticket.concat(`${this.toppings[i].toString()}\n`);
        }

        ticket = ticket.concat(`\n`);
        
        console.warn(ticket.toString());
    }
    
}
   