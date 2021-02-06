import { Employee } from './abstractions/employee';
import { HrManager } from './positions/hr-manager';
import { Manager } from './positions/manager';
import { Reporter } from './positions/reporter';
import { Worker } from './positions/worker';

const manager: Employee = new Manager('MR', 'BIG', 123);
const worker: Employee = new Worker('mr', 'small', 124);

const hrManager = new HrManager();
const reporter = new Reporter();
const employees: Employee[] = [manager, worker];

for (const employee of employees) {
    employee.accept(hrManager);
    employee.accept(reporter);
}

console.log('HrManager Report:');
hrManager.printReport();

console.log('Reporter Report:');
reporter.printReport();
