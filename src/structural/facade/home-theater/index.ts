import { Amplifier } from './gadgets/amplifier';
import { CdPlayer } from './gadgets/cd-player';
import { DvdPlayer } from './gadgets/dvd-player';
import { PopcornPopper } from './gadgets/popcorn-popper';
import { Projector } from './gadgets/projector';
import { Screen } from './gadgets/screen';
import { TheaterLights } from './gadgets/theater-lights';

import { HomeTheaterFacade } from './facade/home-theater.facade';

const amplifier = new Amplifier('Top-O-Line Amplifier');
const dvd = new DvdPlayer('Top-O-Line DVD Player', amplifier);
const cd = new CdPlayer('Top-O-Line CD Player', amplifier);
const projector = new Projector('Top-O-Line Projector', dvd);
const lights = new TheaterLights('Theater Ceiling Lights');
const screen = new Screen('Theater Screen');
const popper = new PopcornPopper('Popcorn Popper');
 
const homeTheater = new HomeTheaterFacade(amplifier, dvd, cd, projector, lights, screen, popper);
 
homeTheater.watchMovie('Raiders of the Lost Ark');
homeTheater.endMovie();

