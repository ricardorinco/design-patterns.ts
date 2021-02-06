import { EmployeeVisitor } from './../interfaces/employee.visitor';

export abstract class Employee {

    constructor(
        private firstName: string,
        private lastName: string,
        private employeeNumber: number
    ) { }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public getEmployeeNumber(): number {
        return this.employeeNumber;
    }

    public accept(visitor: EmployeeVisitor) {
        visitor.visit (this);
    }

}