'use strict';

const PseudoQueue = require('../queue_with_stacks');

describe('PseudoQueue methods', () => {

    it('should enqueue successfully', () => {
        let testQueueA = new PseudoQueue();
        testQueueA.enqueue(5);
        expect(testQueueA.stackA.top.value).toEqual(5);
        let testQueueB = new PseudoQueue();
        let arr = [3, 2, 1]
        arr.map(el => testQueueB.enqueue(el));
        expect(testQueueB.stackA.top.value).toEqual(1);
    });

    it('should dequeue successfully', () => {
        const testQueue = new PseudoQueue();
        ['c', 'b', 'a'].map(el => testQueue.enqueue(el));

        expect(testQueue.dequeue()).toEqual('a');
    });

});