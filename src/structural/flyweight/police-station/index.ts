import { PoliceStationFactory } from './factory/police-station.factory';

const factory = new PoliceStationFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white']
]);
factory.listFlyweights();

function addCarToPoliceDatabase(
    policeStationFactory: PoliceStationFactory,
    plates: string,
    owner: string,
    brand: string,
    model: string,
    color: string
) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = policeStationFactory.getFlyweight([brand, model, color]);

    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory.listFlyweights();