import { Builder } from './creational/prototype/sheep/builder/builder';

const builder = new Builder();


for (let i = 1; i <= 4; i += 1) {
    const creation = builder.createOne(`sheep-${i}`);
    
    console.log(`The sheep ${creation.getName()} was successfully cloned`);
}