import { Troll } from './../interfaces/troll';

export class SimpleTroll implements Troll {

    public attack(): void {
        console.log('The troll tries to grab you!');
    }
    
    public getAttackPower(): number {
        return 10;
    }

    public fleeBattle(): void {
        console.log('The troll shrieks in horror and runs away');
    }

}
