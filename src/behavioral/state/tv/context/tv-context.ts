import { IState } from './../interfaces/istate';

export class TvContext implements IState {

    private tvState: IState;

    public setState(state: IState) {
        this.tvState = state;
    }

    public getState(): IState {
        return this.tvState;
    }

    public doAction(): void {
        this.tvState.doAction();
    }

}