import { PoliceStationFlyweight } from './../station/police-station.flyweight';
export class PoliceStationFactory {

    private stations: {[key: string]: PoliceStationFlyweight} = <any>{};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.stations[this.getKey(state)] = new PoliceStationFlyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): PoliceStationFlyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.stations)) {
            console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
            this.stations[key] = new PoliceStationFlyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.stations[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.stations).length;
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`);
        
        for (const key in this.stations) {
            console.log(key);
        }
    }
}