import { Employee } from './../abstractions/employee';

export class Manager extends Employee {

    public whoWorksForYou() {
        return `${this.getFullName()} every one works for me!`;
    }

}