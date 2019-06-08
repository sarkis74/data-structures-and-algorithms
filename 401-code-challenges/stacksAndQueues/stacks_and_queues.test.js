'use strict';

const stackAndQueue = require('../stacks-and-queues.js');

describe('stack data structure', () => {

    it('can push node into the stack', () => {
        let testStack = new stackAndQueue();
        testStack.push(1);
        expect(testStack.top.value).toEqual(1);
    });


    it('can pop node off of the stack', () => {
        let testStack = new stackAndQueue();
        testStack.push(1);
        testStack.push(2);
        let result = testStack.pop();
        expect(result).toEqual(2);
    });

    it('can peek top node in stack', () => {
        let testStack = new stackAndQueue();
        testStack.push(1);
        testStack.push(2);
        testStack.push(3);
        let result = testStack.peek();
        expect(result).toEqual(3);
    });
});

describe('queue data structure', () => {

    it('can enqueue node into the queue', () => {
        let queue = new stackAndQueue();
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
    });

    it('can dequeue node from the front of the queue', () => {
        let queue = new stackAndQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        let result = queue.dequeue();
        expect(result).toEqual(1);
    });


    it('can peek at value at front of the queue', () => {
        let queue = new stackAndQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
    });

});