import { ICreditCard } from './../interfaces/icreditcard';

export class CreditCardTitanium implements ICreditCard {

    public getCardType(): string {
        return 'Titanium Edge';
    }
    
    public getCreditLimit(): number {
        return 25000;
    }
    
    public getAnnualCharge(): number {
        return 1500;
    }

}