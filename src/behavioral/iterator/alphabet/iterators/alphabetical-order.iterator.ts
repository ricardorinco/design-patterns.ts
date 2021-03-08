import { Iterator } from './../interfaces/iterator';
import { WordsCollection } from './../aggregators/words-collection.aggregator';

export class AlphabeticalOrderIterator implements Iterator<string> {

    private position: number = 0;
    private reverse: boolean = false;

    private wordsCollection: WordsCollection;
    
    constructor(wordsCollection: WordsCollection, reverse: boolean = false) {
        this.wordsCollection = wordsCollection;
        this.reverse = reverse;

        if (reverse) {
            this.position = wordsCollection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ? this.wordsCollection.getCount() - 1 : 0;
    }

    public current(): string {
        return this.wordsCollection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.wordsCollection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.wordsCollection.getCount();
    }

}