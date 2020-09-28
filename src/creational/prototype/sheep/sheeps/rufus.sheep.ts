import { Cloneable } from './../interfaces/cloneable';

export class RufusSheep implements Cloneable {

    private name = 'Rufus';

    public getName(): string {
        return this.name;
    }

    public clone() : Cloneable {
        return new RufusSheep();
    }

    public toString(): string {
        return `This ${this.name} the sheep`;
    }
}
