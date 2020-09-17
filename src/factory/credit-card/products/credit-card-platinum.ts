import { ICreditCard } from './../interfaces/icreditcard';

export class CreditCardPlatinum implements ICreditCard {

    public getCardType(): string {
        return 'Platinum Plus';
    }
    
    public getCreditLimit(): number {
        return 35000;
    }
    
    public getAnnualCharge(): number {
        return 2000;
    }

}