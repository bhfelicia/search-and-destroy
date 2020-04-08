'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 0) {
		return false
	} else if (array.length === 1) {
		if(array[0] === target) {
			return true
		} else {
			return false
		}
	}

	const midpointIdx = Math.floor(array.length/2)

	if(array[midpointIdx] === target) {
		return true
	} else if (target < array[midpointIdx]){

		const lesserHalf = array.slice(0, array[midpointIdx])
		console.log('lesserHalf is :', lesserHalf)
		binarySearch(lesserHalf, target)
	} else {
		const greaterHalf = array.slice(array[midpointIdx])
		binarySearch(greaterHalf, target)
	}
	return false

};
	/*
search through the array with a for loop, checking for the target each time. if the target is found, return true right off. if we break out of the for loop without returning true, return false

Find midpoint of array, see if midpoint is less than or greater than target, if greater than, look in second half, if less than, look in first - recursion?
try to do it in one func, if too unwieldy, break it out
implementing pre-order - check parent node and then move to child nodes

base case: if array is empty, return false
if (array.length === 0) {
	return false
} else if (array.length === 1) {
	if(array[0] === target) {
		return true
	} else {
		return false
	}
}

const midpointIdx = Math.floor(array.length/2)

if(array[midpointIdx] === target) {
	return true
} else if (target < array[midpointIdx]){

	const lesserHalf = array.slice(0, array[midpointIdx])
	binarySearch(lesserHalf, target)
} else {
	const greaterHalf = array.slice(array[midpointIdx])
	binarySearch(greaterHalf, target)
}
	*/

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
