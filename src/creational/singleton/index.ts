import { Database } from './database';

const databaseSingleton1 = Database.getInstance();
const databaseSingleton2 = Database.getInstance();

if (databaseSingleton1 === databaseSingleton2) {
    console.log('Databases are equivalent');
} else {
    console.log('Databases are not equivalent');
}