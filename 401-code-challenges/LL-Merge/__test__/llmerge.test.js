'use strict';

// Sarkis - Import constructor properties/methods
const LlMerge = require('../llmerge');

function Node(value, next = null) {
    this.value = value;
    this.next = next;
};


describe('Check For Linked List Node Value', () => {
    it('Can successfully return k node value', () => {
        let list = new LinkedList();
        list.append('a');
        list.append('b');
        list.append('c');
        list.append('d');
        expect(list.returnNodeValue(2)).toEqual('c');
        expect(list.length).toEqual(5);
    });
});