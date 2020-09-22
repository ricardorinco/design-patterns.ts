export class BankDetails {

    private bankName: string;
    private accountHolderName: string;
    private accountNumber: number;
    
    public get BankName(): string {
        return this.bankName;
    }
    public setBankName(bankName: string) {
        this.bankName = bankName;
    }

    public get AccountHolderName(): string {
        return this.accountHolderName;
    }  
    public setAccountHolderName(accountHolderName: string) {
        this.accountHolderName = accountHolderName;
    }

    public get AccountNumber(): number {
        return this.accountNumber;
    }  
    public setAccountNumber(accountNumber: number) {
        this.accountNumber = accountNumber;
    }

}