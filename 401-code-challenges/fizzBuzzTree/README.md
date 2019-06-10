
==============================================

## Authors: Sarkis Aghazarian


### Links and Resources
* [repo](https://github.com/sarkis74/data-structures-and-algorithms/tree/master/401-code-challenges/queue_with_stacks)

### Challenge
* Create a pseudo-queue class that creates a queue using only two stacks and the FIFO method.

## Approach
* Creates a class with a constructor that has two stacks 
* StackA and StackB are `Stack` objects that contain a `front` property and can be traversed like nodes
* `enqueue(value)`
  * Uses Stack .push(value) and pushes to 1st stack
  * Traverses 1st stack and pushes the value to 2nd stack in order to reverse the order
* `dequeue`
  * If both stack are null, returns an error message
  * If stackA is not null, but stackB is null, then returns value of `stackA.pop()`
  * Else returns value of `stackB.pop()`


### Solution
![whiteboard](https://github.com/sarkis74/data-structures-and-algorithms/blob/master/401-code-challenges/queue_with_stacks/queues_w_stacks.jpg)



### Big O
* Time 0(n)
* Space 0(H)
