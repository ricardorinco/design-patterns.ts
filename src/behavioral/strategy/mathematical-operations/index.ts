import { AddOperation } from './operations/add-operation';
import { DivisionOperation } from './operations/division-operation';
import { MultiplyOperation } from './operations/multiply-operation';
import { OperationContext } from './context/operation.context';
import { SubstractOperation } from './operations/substract-operation';

let operationContext = new OperationContext(new AddOperation);
console.log(`5 + 2 = ${operationContext.executeOperation(5, 2)}`);

operationContext = new OperationContext(new DivisionOperation);
console.log(`100 / 50 = ${operationContext.executeOperation(100, 50)}`);

operationContext = new OperationContext(new MultiplyOperation);
console.log(`12 * 4 = ${operationContext.executeOperation(12, 4)}`);

operationContext = new OperationContext(new SubstractOperation);
console.log(`888 - 111 = ${operationContext.executeOperation(888, 111)}`);