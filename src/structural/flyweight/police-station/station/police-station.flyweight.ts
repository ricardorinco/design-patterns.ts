export class PoliceStationFlyweight {

    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const shared = JSON.stringify(this.sharedState);
        const unique = JSON.stringify(uniqueState);

        console.log(`Flyweight: Displaying shared (${shared}) and unique (${unique}) state.`);
    }

}