'use strict';

const Node = require('../node.js');
const stackAndQueue = require('../stacks_and_queues');


describe('Node Module', () => {
    it('Can successfully create a node as expected', () => {
        let value = 'Some Value';
        let node = new Node(value);
        expect(node instanceof Node).toBeTruthy();
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
});

describe('Stack Tests:', () => {
    it('Can successfully push into a stack', () => {
        let singleStack = new stackAndQueue.Stack();
        singleStack.push(1);
        expect(singleStack.top.value).toEqual(1);
    });
    it('Can successfully push multiple nodes onto a stack', () => {
        let multiStack = new stackAndQueue.Stack();
        multiStack.push(1);
        multiStack.push(2);
        multiStack.push(3);
        multiStack.push(4);
        expect(multiStack.top.value).toEqual(4);
        expect(multiStack.top.next.value).toEqual(3);
        expect(multiStack.top.next.next.value).toEqual(2);
        expect(multiStack.top.next.next.next.value).toEqual(1);
    });
    it('Can successfully pop off the stack', () => {
        let stack = new stackAndQueue.Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.top.value).toEqual(2);
    });
    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new stackAndQueue.Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toEqual(null);
    });
    it('Can successfully peek the next item on the stack', () => {
        let singleStack = new stackAndQueue.Stack();
        singleStack.push(1);
        expect(singleStack.peek()).toEqual(1);
    });
    it('Can successfully instantiate an empty stack', () => {
        let stack = new stackAndQueue.Stack();
        expect(stack instanceof stackAndQueue.Stack).toBeTruthy();
    });
    it('Can successfully return peek() and pop() response from an empty stack', () => {
        let stack = new stackAndQueue.Stack();
        expect(stack instanceof stackAndQueue.Stack).toBeTruthy();
        expect(stack.pop()).toEqual(null);
        expect(stack.peek()).toEqual(null);
    });
});

describe('Queue tests:', () => {
    it('Can successfully enqueue onto a queue', () => {
        let queue = new stackAndQueue.Queue();
        queue.enqueue(1);
        expect(queue.front.value).toEqual(1);
        expect(queue.back.value).toEqual(1);
    });
    it('Can successfully enqueue multiple items into a queue', () => {
        let queue = new stackAndQueue.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.front.value).toEqual(1);
        expect(queue.front.next.value).toEqual(2);
        expect(queue.front.next.next.value).toEqual(3);
        expect(queue.back.value).toEqual(4);
    });
    it('Can successfully dequeue off of a queue the expected value', () => {
        let queue = new stackAndQueue.Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(null);
        expect(queue.back).toEqual(null);
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new stackAndQueue.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.peek()).toEqual(1);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
        let queue = new stackAndQueue.Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.front).toEqual(null);
    });
    it('Can successfully instantiate an empty queue', () => {
        let queue = new stackAndQueue.Queue();
        expect(queue instanceof stackAndQueue.Queue).toBeTruthy();
    });
    it('Can successfully return peek() and dequeue() response from an empty queue', () => {
        let queue = new stackAndQueue.Queue();
        expect(queue instanceof stackAndQueue.Queue).toBeTruthy();
        expect(queue.dequeue()).toEqual(null);
        expect(queue.peek()).toEqual(null);
    });
});

