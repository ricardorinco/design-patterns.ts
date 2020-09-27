import { CdPlayer } from './cd-player';
import { DvdPlayer } from './dvd-player';

export class Amplifier {

    private description: string;
    private dvdPlayer: DvdPlayer;
    private cdPlayer: CdPlayer;

    constructor(description: string) {
        this.description = description;
    }
       
    public on(): void {
        console.log(`${this.description} on`);
    }
       
    public off(): void {
        console.log(`${this.description} off`);
    }
       
    public setStereoSound(): void {
        console.log(`${this.description} stereo mode on`);
    }
       
    public setSurroundSound(): void {
        console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
    }
       
    public setVolume(level: number): void {
        console.log(`${this.description} setting volume to ${level}`);
    }
    
    public setDvd(dvd: DvdPlayer): void {
        this.dvdPlayer = dvd;

        console.log(`${this.description} setting DVD player to ${this.dvdPlayer}`);
    }
    
    public setCd(cd: CdPlayer): void {
        this.cdPlayer = cd;

        console.log(`${this.description} setting CD player to ${this.cdPlayer}`);
    }
       
    public toString(): string {
        return this.description;
    }

}