export interface Employee {
    
    add(employee: Employee): void;
    remove(employee: Employee): void;

    getId(): number;
    getName(): string;
    getSalary(): number;
    getChild(value: number): Employee | any;

    print(): void;
}