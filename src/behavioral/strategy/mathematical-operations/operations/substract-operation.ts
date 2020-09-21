import { IOperationStrategy } from './../interfaces/ioperation.strategy';

export class SubstractOperation implements IOperationStrategy {

    public doOperation(valueA: number, valueB: number): number {
        return valueA - valueB;
    }

}