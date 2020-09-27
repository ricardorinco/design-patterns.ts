export class PopcornPopper {

    private description: string;
 
    constructor(description: string) {
        this.description = description;
    }
 
    public on(): void {
        console.log(`${this.description} on`);
    }
       
    public off(): void {
        console.log(`${this.description} off`);
    }

    public pop(): void {
        console.log(`${this.description} popping popcorn`);
    }

    public toString(): string {
        return this.description;
    }

}