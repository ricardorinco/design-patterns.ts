import { User } from './../models/user';

export class UserBuilder {

    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(name: string) {
        this.name = name;
    }

    public get Name(): string {
        return this.name;
    }

    public get Age() {
        return this.age;
    }
    public setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }

    public get Phone() {
        return this.phone;
    }
    public setPhone(value: string): UserBuilder {
        this.phone = value;
        return this;
    }

    public get Address() {
        return this.address;
    }
    public setAddress(value: string): UserBuilder {
        this.address = value;
        return this;
    }

    public build(): User {
        return new User(this);
    }
}