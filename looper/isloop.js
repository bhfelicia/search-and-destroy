'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  // if(linkedlist.head.previous) {
  //   return true
  // }
  if(linkedlist.tail.next) {
    return true
  } else if (linkedlist.head.previous) {
    return true
  } else {
  return false
}


/*
if we're pointing to a node that has already been pointed to, it's a loop
could also be a loop if tail is pointing to head

make a cache
start at head, loop through linked list - we know what head is (this.head)
check next value, if exists, it's a loop


if node is previous node for something else
in loop there would be no tail (node with next being null) because the next points to another node
*/
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
