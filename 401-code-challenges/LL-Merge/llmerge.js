'use strict';

    function MergedLL(value, next) {
        this.value = value;
        this.next = next;
    };

    MergedLL.prototype.zipper(list1, list2) {

        let currentListA = list1.head;
        let currentListB = list2.head;
        let tempA = currentListA.next;
        let tempB = currentListB.next;

        while (tempA && tempB) {

            currentListA.next = currentListB;
            currentListB.next = tempA;
            currentListA = tempA;
            currentListB = tempB;
            tempA = currentListA.next;
            tempB = currentListB.next;

        }

        return list1;
    };



// let objA = new MergedLL('a');
// objA.next = {value: 'b', next: {value: 'c', next: null}};
//
// let objB = new MergedLL(1);
// objB.next = {value: 2, next: null};
//
// objA.zipper(objA, objB);
//
//
// module.exports = zipper;