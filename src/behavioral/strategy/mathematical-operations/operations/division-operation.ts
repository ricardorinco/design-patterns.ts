import { IOperationStrategy } from './../interfaces/ioperation.strategy';

export class DivisionOperation implements IOperationStrategy {

    public doOperation(valueA: number, valueB: number): number {
        return valueA / valueB;
    }

}