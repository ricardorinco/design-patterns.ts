import { Cloneable } from './../interfaces/cloneable';

export class ApolloSheep implements Cloneable {

    private name = 'Apollo';

    public getName(): string {
        return this.name;
    }

    public clone() : Cloneable {
        return new ApolloSheep();
    }

    public toString(): string {
        return `This ${this.name} the sheep`;
    }
}
