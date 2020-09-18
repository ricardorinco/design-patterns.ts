import { CreditCardFactory } from './credit-card.factory';
import { CreditCardTitanium } from './..products/credit-card-titanium';
import { ICreditCard } from './..interfaces/icreditcard';

export class CreditCardTitaniumFactory extends CreditCardFactory {

    protected makeProduct(): ICreditCard {
        return new CreditCardTitanium();
    }

}