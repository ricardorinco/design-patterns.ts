import { CreditCardFactory } from './credit-card.factory';
import { CreditCardPlatinum } from '../products/credit-card-platinum';
import { ICreditCard } from '../interfaces/icreditcard';

export class CreditCardPlatinumFactory extends CreditCardFactory {

    protected makeProduct(): ICreditCard {
        return new CreditCardPlatinum();
    }

}