import { CreditCardPlatinumFactory } from './factories/credit-card-platinum.factory';
import { CreditCardTitaniumFactory } from './factories/credit-card-titanium.factory';

const platinumCard = new CreditCardPlatinumFactory().createProduct();
console.log('Card Type: ', platinumCard.getCardType());
console.log('Credit Limit: ', platinumCard.getCreditLimit());
console.log('Annual Charge:', platinumCard.getAnnualCharge());

console.log('\n -------------- \n');

const titaniumCard = new CreditCardTitaniumFactory().createProduct();
console.log('Card Type: ', titaniumCard.getCardType());
console.log('Credit Limit: ', titaniumCard.getCreditLimit());
console.log('Annual Charge:', titaniumCard.getAnnualCharge());
