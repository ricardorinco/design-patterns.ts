import { Employee } from './../abstractions/employee';
import { EmployeeVisitor } from './../interfaces/employee.visitor';

export class Reporter implements EmployeeVisitor {

    public report = '';

    public visit(employee: Employee) {
        this.report += `${employee.getFullName()}\n`;
    }

    public printReport() {
        console.log (this.report);
    }

}