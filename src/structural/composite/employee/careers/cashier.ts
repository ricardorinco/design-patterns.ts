import { Employee } from './../interfaces/employee';

export class Cashier implements Employee {

    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public add(employee: Employee): void { }
    public remove(employee: Employee): void { }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getSalary(): number {
        return this.salary;
    }
    getChild(value: number): any {
        return null;
    }

    public print(): void {
        console.log('+----------------------------------------+');
        console.log(`\tId: ${this.getId()}`);
        console.log(`\tName: ${this.getName()}`);
        console.log(`\tSalary: ${this.getSalary()}`);
        console.log('+----------------------------------------+');
    }

}