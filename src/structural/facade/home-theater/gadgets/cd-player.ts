import { Amplifier } from './amplifier';

export class CdPlayer {

    private description: string;
    private currentTrack: number;
    private amplifier: Amplifier;
    private title: string;
 
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
        this.title = '';
        
        console.log(`${this.description} eject`);
    }
 
    public play(title: string, track: number): void {
        this.title = title;
        this.currentTrack = track;

        console.log(`${this.description} playing ${this.currentTrack} - ${this.title}`);
    }


    public stop(): void {
        this.currentTrack = 0;
        this.title = '';

        console.log(`${this.description} stopped`);
    }
 
    public pause(): void {
        console.log(`${this.description} paused ${this.currentTrack} - ${this.title}`);
    }
 
    public toString(): string {
        return this.description;
    }

}