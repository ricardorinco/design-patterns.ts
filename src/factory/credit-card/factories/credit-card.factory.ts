import { ICreditCard } from '../interfaces/icreditcard';

export abstract class CreditCardFactory {

    protected abstract makeProduct(): ICreditCard;

    public createProduct(): ICreditCard {
        return this.makeProduct();
    }

}