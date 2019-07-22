'use strict';

const Node = require('../node');
const bFS = require('../breadth_first');

class BinaryTree {
    constructor(root = null){
        this.root = root;
    }
}


describe('tests bfs of a binary tree', () => {

    it('successfully traverses binary tree breadth first', () => {

        const rootTree = new Node(10);
        const rootTreeLeft = new Node(5);
        const rootTreeRight = new Node(15);
        const rootTreeLeft1 = new Node(3);
        const rootTreeLeft2 = new Node(6);
        const rootTreeRight1 = new Node(13);
        const rootTreeRight2 = new Node(16);

        rootTree.left = rootTreeLeft;
        rootTreeLeft.left = rootTreeLeft1;
        rootTreeLeft.right = rootTreeLeft2;

        rootTree.right = rootTreeRight;
        rootTreeRight.left = rootTreeRight1;
        rootTreeRight.right = rootTreeRight2;


        const tree = new BinaryTree(rootTree);
        const test = bFS(tree.root, []);

        expect(test).toEqual([10,5,15,3,6,13,16]);
        expect(test.length).toEqual(7);

    });

    it('returns null if root is empty', () => {

        const emptyTree = new BinaryTree();
        const emptyTest = bFS(emptyTree.root, []);

        expect(emptyTest).toEqual('root is null');

    });

});