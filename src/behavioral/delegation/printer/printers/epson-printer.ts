import { Printer } from './../interfaces/printer';

export class EpsonPrinter implements Printer {

    public print(message: string): void {
        console.log(`Epson printer : ${message}`)
    }

}