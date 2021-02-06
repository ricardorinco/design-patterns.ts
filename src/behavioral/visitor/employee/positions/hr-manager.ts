import { EmployeeVisitor } from './../interfaces/employee.visitor';
import { Manager } from './manager';
import { Worker } from './worker';

export class HrManager implements EmployeeVisitor {

    public report = '';

    public visit(employee: Worker | Manager) {
        (employee instanceof Worker) ?
            this.report += `Employee number: ${employee.getEmployeeNumber()} Says ${(<Worker>employee).whatDoYouWorkOn()}\n` :
            this.report += `Employee number: ${employee.getEmployeeNumber()} Says ${(<Manager>employee).whoWorksForYou()}\n`;

    }

    public printReport() {
        console.log (this.report);
    }

}