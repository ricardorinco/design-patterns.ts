import { Printer } from './../interfaces/printer';

export class HpPrinter implements Printer {

    public print(message: string): void {
        console.log(`HP printer : ${message}`)
    }

}