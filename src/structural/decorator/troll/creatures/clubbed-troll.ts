import { Troll } from './../interfaces/troll';

export class ClubbedTroll implements Troll {

    private decorated: Troll;

    constructor(decorated: Troll) {
        this.decorated = decorated;
    }

    public attack(): void {
        this.decorated.attack();
        console.log('The troll swings at you with a club!');
    }
    
    public getAttackPower(): number {
        return this.decorated.getAttackPower() + 10;
    }

    public fleeBattle(): void {
        this.decorated.fleeBattle();
    }

}
