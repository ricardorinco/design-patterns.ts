import { Printer } from './../interfaces/printer';

export class PrinterController implements Printer {

    private printer: Printer;

    constructor(printer: Printer) {
        this.printer = printer;
    }

    public print(message: string): void {
        this.printer.print(message);
    }

}