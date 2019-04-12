'use strict';

function Node(data, next) {
    this.data = data;
    this.next = next;
}

let objA = {head: {value: 'a', next: {value: 'b', next: {value: 'c', next: null}}}};

let objB = {head: {value: 1, next: {value: 2, next: null}}};



function zipper(list1, list2) {

    let currentListA = list1.head;
    let currentListB = list2.head;
    let tempA = currentListA.next;
    let tempB = currentListB.next;

    while (tempA && tempB) {

        currentListA.next = currentListB;
        currentListB.next= tempA;
        currentListA = tempA;
        currentListB = tempB;
        tempA = currentListA.next;
        tempB = currentListB.next;

    }

    return list1;

};

zipper(objA, objB);