'use strict';

let Stack = require('./stack');

class PseudoQueue {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    enqueue(value) {
        this.stackA.push(value);
    }

    dequeue() {
        if(!this.stackA && !this.stackB) {
            return "queue is empty";
        }
        if(this.stackA && !this.stackB) {
            return this.stackA.pop().value;
        }
        return this.stackB.pop().value;
    }
}

module.exports = PseudoQueue;