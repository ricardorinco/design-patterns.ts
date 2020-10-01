import { Accountant } from './careers/accountant';
import { BankManager } from './careers/bank-manager';
import { Cashier } from './careers/cashier';

const sohanKumar = new Cashier(101, 'Sohan Kumar', 20000.0);
const mohanKumar = new Cashier(102, 'Mohan Kumar', 25000.0);
const seemaMahiwal = new Accountant(103, 'Seema Mahiwal', 30000.0);
const ashwaniRajput= new BankManager(100, 'Ashwani Rajput', 100000.0);

ashwaniRajput.add(sohanKumar);
ashwaniRajput.add(mohanKumar);
ashwaniRajput.add(seemaMahiwal);
ashwaniRajput.print();