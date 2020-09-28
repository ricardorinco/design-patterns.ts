import { Cloneable } from './../interfaces/cloneable';

import { AceSheep } from './../sheeps/ace.sheep';
import { ApolloSheep } from './../sheeps/apollo.sheep';
import { BanditSheep } from './../sheeps/bandit.sheep';
import { RufusSheep } from './../sheeps/rufus.sheep';

export class Builder {

    private cloneableMap: { [s: string]: Cloneable; } = {};;

    constructor() {
        this.cloneableMap['sheep-1'] = new AceSheep;
        this.cloneableMap['sheep-2'] = new ApolloSheep;
        this.cloneableMap['sheep-3'] = new BanditSheep;
        this.cloneableMap['sheep-4'] = new RufusSheep;
    }

    public createOne(sheep: string): Cloneable {
        return this.cloneableMap[sheep].clone();
    }

}