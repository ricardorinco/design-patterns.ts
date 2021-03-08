import { Aggregator } from './../interfaces/aggregator';
import { AlphabeticalOrderIterator } from './../iterators/alphabetical-order.iterator';
import { Iterator } from './../interfaces/iterator';

export class WordsCollection implements Aggregator {

    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }

}