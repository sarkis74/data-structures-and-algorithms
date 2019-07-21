function fizzBuzzTree(root) {
    if(!root) {
        return null;
    };
    if(root.value % 3 == 0 && root.value % 5 == 0) {
        root.value = 'FizzBuzz';
    };
    if(root.value % 3 == 0) {
        root.value = 'Fizz';
    }
    if(root.value % 5 == 0) {
        root.value = 'Buzz';
    }
    fizzBuzzTree(root.left);
    fizzBuzzTree(root.right);

    return root;
}

module.exports = fizzBuzzTree;