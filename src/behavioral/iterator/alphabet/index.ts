import { WordsCollection } from './aggregators/words-collection.aggregator';

const wordsCollection = new WordsCollection();
wordsCollection.addItem('First');
wordsCollection.addItem('Second');
wordsCollection.addItem('Third');

const iterator = wordsCollection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = wordsCollection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
