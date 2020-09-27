import { Amplifier } from './../gadgets/amplifier';
import { CdPlayer } from './../gadgets/cd-player';
import { DvdPlayer } from './../gadgets/dvd-player';
import { Projector } from './../gadgets/projector';
import { PopcornPopper } from './../gadgets/popcorn-popper';
import { Screen } from './../gadgets/screen';
import { TheaterLights } from './../gadgets/theater-lights';

export class HomeTheaterFacade {

    private amplifier: Amplifier;
    private dvdPlayer: DvdPlayer;
    private cdPlayer: CdPlayer;
    private projector: Projector;
    private lights: TheaterLights;
    private screen: Screen;
    private popper: PopcornPopper;


    constructor(
        amplifier: Amplifier,
        dvdPlayer: DvdPlayer,
        cdPlayer: CdPlayer,
        projector: Projector,
        lights: TheaterLights,
        screen: Screen,
        popper: PopcornPopper
    ) {
        this.amplifier = amplifier;
        this.dvdPlayer = dvdPlayer;
        this.cdPlayer = cdPlayer;
        this.projector = projector;
        this.lights = lights;
        this.screen = screen;
        this.popper = popper;
    }
   
    public watchMovie(movie: string): void {
        console.log('Get ready to watch a movie...');

        this.popper.on();
        this.popper.pop();
        
        this.lights.dim(10);
        this.screen.down();

        this.projector.on();
        this.projector.wideScreenMode();
        
        this.amplifier.on();
        this.amplifier.setDvd(this.dvdPlayer);
        this.amplifier.setSurroundSound();
        this.amplifier.setVolume(5);

        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
    }

    public endMovie(): void {
        console.log('Shutting movie theater down...');

        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amplifier.off();

        this.dvdPlayer.stop();
        this.dvdPlayer.eject();
        this.dvdPlayer.off();
    }
      
    public listenToCd(title: string): void {
        console.log('Get ready for an audiopile experence...');

        this.lights.on();
        
        this.amplifier.on();
        this.amplifier.setVolume(5);
        this.amplifier.setCd(this.cdPlayer);
        this.amplifier.setStereoSound();

        this.cdPlayer.on();
        this.cdPlayer.play(title, 1);
       }
      
    public endCd(): void {
        console.log('Shutting down CD...');
        
        this.amplifier.off();
        this.amplifier.setCd(this.cdPlayer);
        
        this.cdPlayer.eject();
        this.cdPlayer.off();
    }

}