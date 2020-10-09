import { Printer } from './../interfaces/printer';

export class CanonPrinter implements Printer {

    public print(message: string): void {
        console.log(`Canon printer : ${message}`)
    }

}