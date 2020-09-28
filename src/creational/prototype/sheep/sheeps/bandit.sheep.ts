import { Cloneable } from './../interfaces/cloneable';

export class BanditSheep implements Cloneable {

    private name = 'Bandit';

    public getName(): string {
        return this.name;
    }

    public clone() : Cloneable {
        return new BanditSheep();
    }

    public toString(): string {
        return `This ${this.name} the sheep`;
    }
}
