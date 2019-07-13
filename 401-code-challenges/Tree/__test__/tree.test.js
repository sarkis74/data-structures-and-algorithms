'use strict';

const Node = require('../node');
const Tree = require('../tree');


describe('binary and binary search tree tests', () => {

    it('it can add a left and right child to a root node', () => {

        const testNodeA = new Node(1);
        const testNodeB = new Node(2);
        const testNodeC = new Node(3);


        testNodeA.left = testNodeB;
        testNodeA.right = testNodeC;

        const testBT = new Tree.BinaryTree(testNodeA);
        const testBST = new Tree.BinarySearchTree(testNodeA);

        expect(testBT.root.left.value).toBe(2);
        expect(testBT.root.right.value).toBe(3)


    })
})



