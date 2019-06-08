'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};


class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const temp = this.top;
        this.top = new Node(value);
        this.top.next = temp;
    }

    pop() {
        const result = this.top;
        this.top = this.top.next;
        return result;
    }

    peek() {
        return this.top.value;
    }
}