'use strict';

const Node = require('./node');


//Simple Binary Tree
class BinaryTree{
    constructor(root = null){// defaults to null
        this.root = root;
    }
}

const preOrder = (root, arr) => {// root, left, right
    if (root === null){
        return;
    }

    arr.push(root.value);
    preOrder(root.left, arr);
    preOrder(root.right, arr);
    return arr;
};

const inOrder = (root, arr) => {// left, root, right
    if (root === null) {
        return;
    }

    inOrder(root.left, arr);
    arr.push(root.value);
    inOrder(root.right, arr);
    return arr;
}

const postOrder = (root, arr) => {// left, right, root
    if (root === null){
        return;
    }

    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.value);
    return arr;
};


// Binary Search Tree
class BinarySearchTree {
    constructor(root = null){
        this.root = root;
    }
    add(value) {
        const newNode = new Node(value);

        if(!value) {// if no value passed in the method
            return 'cannot add to  a null value';
        }

        if(!this.root) {// if root is null
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true) {
            if(newNode.value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
        }
    }

    contains(value){

        if(!value){
            return 'cannot find a null value';
        }
        if(!this.root){
            return 'value does not exist';
        }
        if(value.value === this.root){
            return true;
        }

        let current = this.root;
        let found = false;

        while(!found){

            if (current && value > current.value){
                current = current.right;
            } else if (current && value < current.value){
                current = current.left;
            } else if (current && value === current.value){
                return true;
            } else {
                return false;
            }

        }
    }
}

let test = new BinarySearchTree();


module.exports = { BinarySearchTree, BinaryTree, preOrder, postOrder, inOrder };