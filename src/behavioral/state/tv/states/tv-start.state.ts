import { IState } from './../interfaces/istate';

export class TvStartState implements IState {

    public doAction(): void {
        console.log('TV is turned ON');
    }

}