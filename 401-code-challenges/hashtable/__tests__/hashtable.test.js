'use strict';

let HashTable = require('../hashtable');

describe('testing hashing function', () => {
    let testTable1 = new HashTable(10);

    test('hashing', () => {
        expect(testTable1.hash('cat')).toEqual(11);
        expect(testTable1.hash('test2')).toEqual(9);
    });

});
describe('testing methods', () => {
    let testTable2 = new HashTable(2);
    testTable2.add('cat', 'dog');
    test('adding an element', () => {
        expect(testTable2.map[1].key).toEqual('cat');
        expect(testTable2.map[1].value).toEqual('dog');
    });
    test('getting an element', () => {
        expect(testTable2.get('cat')).toEqual('dog');
    });
});