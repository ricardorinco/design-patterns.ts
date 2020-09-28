import { Cloneable } from './../interfaces/cloneable';

export class AceSheep implements Cloneable {

    private name = 'Ace';

    public getName(): string {
        return this.name;
    }

    public clone() : Cloneable {
        return new AceSheep();
    }

    public toString(): string {
        return `This ${this.name} the sheep`;
    }
}
