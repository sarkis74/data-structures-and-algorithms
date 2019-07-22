'use strict';

class BinaryTree {
    constructor(root = null){
        this.root = root;
    }
    findMaxVal(current=this.root) {
        if(!this.root){
            return null;
        }
        if (!current.left&&!current.right){
            return (current.value)
        }else{
            let left = null;
            let right = null;
            if (current.left){
                left = this.findMaxVal(current.left);
            }
            if (current.right){
                right = this.findMaxVal(current.right);
            }
            if (left < right){
                left = right;
            }
            if(left < current.value){
                return current.value;
            }
            else{
                return left;
            }
        }
    }
}

module.exports = BinaryTree;


