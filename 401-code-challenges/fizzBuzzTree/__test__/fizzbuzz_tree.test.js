'use strict';

const fizzBuzzTree = require('../fizzbuzz_tree');


describe('Node Module', () => {
    it('Can successfully change node value to FizzBuzz', () => {
        let tree = {value: 15, left:{value: 9, left: {value: 7}}, right:{value: 11, left: {value: 10}}};;
        let testTree = fizzBuzzTree(tree);
        expect(testTree.value).toEqual('FizzBuzz');
    });
    it('Can successfully change node  to Fizz', () => {
        let tree = {value: 15, left:{value: 9, left: {value: 7}}, right:{value: 11, left: {value: 10}}};;
        let testTree = fizzBuzzTree(tree);
        expect(testTree.left.value).toEqual('Fizz');
    });
    it('Can successfully change node value to Buzz', () => {
        let tree = {value: 15, left:{value: 9, left: {value: 7}}, right:{value: 11, left: {value: 10}}};;
        let testTree = fizzBuzzTree(tree);
        expect(testTree.right.left.value).toEqual('Buzz');
    });
});

