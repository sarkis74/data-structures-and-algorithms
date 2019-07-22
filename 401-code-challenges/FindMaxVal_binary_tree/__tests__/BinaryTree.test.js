'use strict';

const Node = require('../node');
const BinaryTree = require('../BinaryTree');

describe('tests find max node val of a binary tree', () => {

    it('successfully finds max val', () => {

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

        expect(tree.findMaxVal()).toEqual(16)

    });

    it('returns null if root is empty', () => {

        const emptyTree = new BinaryTree();

        expect(emptyTree.root).toEqual(null);

    });

});