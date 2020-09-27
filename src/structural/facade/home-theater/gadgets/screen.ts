
export class Screen {

    private description: string;
 
    constructor(description: string) {
        this.description = description;
    }
 
    public up(): void {
        console.log(`${this.description} going up`);
    }
       
    public down(): void {
        console.log(`${this.description} going down`);
    }

    public toString(): string {
        return this.description;
    }

}