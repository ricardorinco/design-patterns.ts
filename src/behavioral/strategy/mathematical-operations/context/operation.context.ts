import { IOperationStrategy } from './../interfaces/ioperation.strategy';

export class OperationContext {

    private operationStrategy: IOperationStrategy

    constructor(operationStrategy: IOperationStrategy) {
        this.operationStrategy = operationStrategy;
    }

    public executeOperation(valueA: number, valueB: number): number {
        return this.operationStrategy.doOperation(valueA, valueB);
    }

}