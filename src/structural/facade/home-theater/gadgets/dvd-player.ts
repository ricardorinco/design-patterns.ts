import { Amplifier } from './amplifier';

export class DvdPlayer {

    private description: string;
    private amplifier: Amplifier;
    private movie: string;
 
    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }
 
    public on(): void {
        console.log(`${this.description} on`);
    }
       
    public off(): void {
        console.log(`${this.description} off`);
    }

    public eject(): void {
        this.movie = '';
        
        console.log(`${this.description} eject`);
    }
 
    public play(movie: string): void {
        this.movie = movie;

        console.log(`${this.description} playing ${this.movie}`);
    }


    public stop(): void {
        this.movie = '';

        console.log(`${this.description} stopped`);
    }
 
    public pause(): void {
        console.log(`${this.description} paused ${this.movie}`);
    }
 
    public toString(): string {
        return this.description;
    }

}