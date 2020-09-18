import { User } from './models/user';
import { UserBuilder } from './builders/user.builder';

const admin: User = new UserBuilder('Admin')
    .setAge(26)
    .setAddress('Brazil')
    .build();

console.log('Name:', admin.Name);
console.log('Age:', admin.Age);
console.log('Address:', admin.Address);
console.log('Name:', admin.Name);

    