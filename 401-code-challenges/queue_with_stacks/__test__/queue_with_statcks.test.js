'use strict';

// Sarkis - Import constructor properties/methods
const PseudoQueue = require('../queue_with_stacks');


describe('Check For PseudoQueue Values', () => {
    it('Can successfully add element to enqueue', () => {
        let queue = new PseudoQueue();
        queue.enqueue(5);
        let qValA = queue.stackA.first[0];
        expect(qValA.value).toEqual(5);
        let arr = [3, 2, 1];
        arr.map(el => queue.enqueue(el));
        let qValB = queue.stackA.first[0];
        expect(qValB.value).toEqual(1);
    });
    it('Can successfully add element to dequeue', () => {
        let queue = new PseudoQueue();
        let arr = ['c', ,'b', 'a'];
        arr.map(el => queue.enqueue(el));
        let qVal = queue.dequeue()
        expect(qVal.value).toEqual('a');
    });
});