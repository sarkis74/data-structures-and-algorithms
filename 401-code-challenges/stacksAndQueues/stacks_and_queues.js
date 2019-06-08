'use strict';

const Node = require('./node');

class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        const temp = this.top;
        this.top = new Node(value);
        this.top.next = temp;
    }
    pop(){
        const result = this.top.value;
        this.top = this.top.next;
        return result;
    }
    peek(){
        return this.top.value;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
    }
    enqueue(value){
        // Worked with Skyler on this portion
        let newNode = new Node(value);

        if (this.back === null) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue(){
        const result = this.front.value;
        if (this.front || this.front.next) {
            this.front = this.front.next;
        }
        if (this.front === null) this.rear = null;
        return result;
    }

    peek(){
        return this.front.value;
    }

}

module.exports = { Stack, Queue };