import { Employee } from './../interfaces/employee';

export class BankManager implements Employee {

    private employees: Employee[] = [];

    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public add(employee: Employee): void {
        this.employees.push(employee);
    }
    public remove(employee: Employee): void {
        delete this.employees[
            this.employees.findIndex(emp => emp.getId() === employee.getId())
        ];        
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getSalary(): number {
        return this.salary;
    }
    public getChild(index: number): Employee {
        return this.employees[index];
    }

    public print(): void {
        console.log('+---------------------------------------+');
        console.log(`|\tId: ${this.getId()}\t\t\t\t|`);
        console.log(`|\tName: ${this.getName()}\t\t|`);
        console.log(`|\tSalary: ${this.getSalary()}\t\t\t|`);
        console.log('+---------------------------------------+');

        this.employees.forEach(employee => {
            console.log(`|\tId: ${employee.getId()}\t\t\t\t|`);
            console.log(`|\tName: ${employee.getName()}\t\t|`);
            console.log(`|\tSalary: ${employee.getSalary()}\t\t\t|`);
            console.log('+---------------------------------------+');
        });
    }

}