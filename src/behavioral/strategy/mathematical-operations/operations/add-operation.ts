import { IOperationStrategy } from './../interfaces/ioperation.strategy';

export class AddOperation implements IOperationStrategy {

    public doOperation(valueA: number, valueB: number): number {
        return valueA + valueB;
    }

}