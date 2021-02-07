export class Context {

    public output: any;

    constructor(public input: string) {
        this.input = input.toLowerCase();
        
        this.output = {
            startCommand: false,
            endCommand: false,
            espresso: false,
            cappuccino: false,
            size: "small",
        };
    }

    startsWith(str: string): boolean {
        return this.input.includes(str);
    }

}