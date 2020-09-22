import { BankCustomer } from './adapter/bank-customer.adapter';

const johnDoe = new BankCustomer('John Doe', 542455889654, 'Bank of America');
johnDoe.givenBankDetails();
johnDoe.checkCreditCard();