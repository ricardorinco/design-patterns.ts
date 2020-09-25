import { IState } from './../interfaces/istate';

export class TvStopState implements IState {

    public doAction(): void {
        console.log('TV is turned OFF');
    }

}