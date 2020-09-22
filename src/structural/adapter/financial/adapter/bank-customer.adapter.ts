import { BankDetails } from './../adaptee/bank-details';
import { ICreditCard } from './../interfaces/icredit-card';

export class BankCustomer extends BankDetails implements ICreditCard {

    private _accountHolderName: string;
    private _accountNumber: number;
    private _bankName: string;

    constructor(
        accountHolderName: string,
        accountNumber: number,
        bankName: string
    ) {
        super();
     
        this._accountHolderName = accountHolderName;
        this._accountNumber = accountNumber;
        this._bankName = bankName;
    }

    public givenBankDetails(): void {
        this.setAccountHolderName(this._accountHolderName);
        this.setAccountNumber(this._accountNumber);
        this.setBankName(this._bankName);
    }

    public checkCreditCard() {
        console.log(`The account number ${this.AccountNumber} of ${this.AccountHolderName} in ${this.BankName} bank is valid and authenticated for issuing the credit card.`);
    }

}