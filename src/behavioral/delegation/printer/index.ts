import { CanonPrinter } from './printers/canon-printer';
import { EpsonPrinter } from './printers/epson-printer';
import { HpPrinter } from './printers/hp-printer';

import { PrinterController } from './controller/printer-controller';

const MESSAGE_TO_PRINT = `"Trust in the LORD forever, for the LORD, the LORD himself, is the Rock eternal." Isaiah 26:4`;

const canonPrinterController = new PrinterController(new CanonPrinter());
canonPrinterController.print(MESSAGE_TO_PRINT);

const epsonPrinterController = new PrinterController(new EpsonPrinter());
epsonPrinterController.print(MESSAGE_TO_PRINT);

const hpPrinterController = new PrinterController(new HpPrinter());
hpPrinterController.print(MESSAGE_TO_PRINT);
