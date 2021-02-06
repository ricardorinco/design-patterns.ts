import { Employee } from './../abstractions/employee';

export class Worker extends Employee {

    public whatDoYouWorkOn() {
        return `${this.getFullName()} just sit down all day long but my manager doesn't know!`;
    }

}