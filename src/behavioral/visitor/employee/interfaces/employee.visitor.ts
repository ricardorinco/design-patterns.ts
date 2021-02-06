import { Employee } from './../abstractions/employee';

export interface EmployeeVisitor {
    visit(employee: Employee): void;
}