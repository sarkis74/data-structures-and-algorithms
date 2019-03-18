'use strict';
const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.length++;
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
            this.length++;
        }
        tail.next = newNode;
        return this.head;
    }
    insertBefore(value, newVal) { //Sarkis - Need to search value via loop and stop once there
        let newNode = new Node(newVal); //Sarkis - Create new node object
        if(!this.head) { // If head is not null
            throw new Error('Error');
        }
        if(this.head.value == value) {
            newNode.next = this.head;
            this.head = newNode;
            return this.head;
        }
        let current = this.head; // Current is assigned the head object occupying the same spot
        while(current.next){ //Sarkis - Keep looping until null(final value) reached
            //Sarkis - Need to check if current value matches input value
            if(current.next.value == value) {
                this.length++;
                //Sarkis - If match found new Node(newVal) --> current(head) object
                newNode.next = current.next; //Sarkis - new node is assigned current(head)
                return current.next = newNode;  //Sarkis - Prior node needs to be assigned to newNode
            }
            current = current.next;
        }
        return this.head;
    }
    insertAfter(value, newVal) { //Sarkis - Need to search value via loop and stop once there
        let newNode = new Node(newVal);
        if(!this.head) {
            throw new Error('Error');
        }
        if(this.head.value == value) {
            this.head.next = newNode;
            return this.head;
        }
        let current = this.head;
        while(current.next){
            if(current.next.value == value) {
                current = current.next;
                newNode.next = current.next; //Sarkis - new node is assigned current(head)
                current.next = newNode;
                this.length++;
            }
            current = current.next;
        }
        return this.head;
    }

    push(value) {
        let current = this.head;
        while(current) {
            current = current.next;
            if(current == null) {
                this.append(value);
            }
        }
        console.log('test')
        return this.value;
    }
};

const list = new LinkedList();

list.append('a');
list.append('b');
list.append('c');
list.append('d');

list.push('e')

/*Node {
  value: 'a',
  next: Node { value: 'b', next: Node { value: 'c', next: { value: 'd', next: null } } } }
*/

console.log(list.returnNodeValue(2));

module.exports = LinkedList;
