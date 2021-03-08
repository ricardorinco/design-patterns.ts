import { Iterator } from './../interfaces/iterator';

export interface Aggregator {

    getIterator(): Iterator<string>;

}