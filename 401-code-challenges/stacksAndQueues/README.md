
==============================================

## Authors: Sarkis Aghazarian


### Links and Resources
* [repo](https://github.com/sarkis74/data-structures-and-algorithms/tree/master/401-code-challenges/stacksAndQueues)

### Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
Create a Stack class that has a top property. It creates an empty Stack when instantiated. 
This object should be aware of a default empty value assigned to top when the stack is created.
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

## Approach
* Creates a class Node with value, next and pointer
* Creates a Stack class that has a top property
* Stack methods pushes, pops and peeks nodes
* Queue methods enqueues, dequeues and peeks nodes

### Big O
* Time 0(1)
* Space 0(H)
