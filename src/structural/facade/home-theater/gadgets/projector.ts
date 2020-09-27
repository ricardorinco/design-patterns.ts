import { DvdPlayer } from './dvd-player';

export class Projector {

    private description: string;
    private dvdPlayer: DvdPlayer;
    
    constructor(description: string, dvdPlayer: DvdPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }

    public on(): void {
        console.log(`${this.description} on`);
    }
       
    public off(): void {
        console.log(`${this.description} off`);
    }

    public wideScreenMode(): void {
        console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
    }
 
    public tvMode(): void {
        console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
    }

    public toString(): string {
        return this.description;
    }

}