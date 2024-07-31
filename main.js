/*
Question 1 : 

Return the First Element in an Array

Create a function that takes an array containing only numbers and return the first element.
Examples

getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500

*/




//method 1
const numbers = [2,3,45,2,3,4,3]

const returnFirst = ((array) => array[0])


console.log(returnFirst(numbers)); // 2

//method 2

const returnIst = ((array) => array.shift()) 


console.log(returnIst(numbers));//2



/* Question 2

Pair Management

Given two arguments, return an array which contains these two arguments.
Examples

makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]

*/

// method 1

function makePair(a,b) { 
    return Array(a,b)
}

//method 2
function makePair2(a,b) { 
    let array = []
    return array.unshift(a,b)
    
}
console.log(makePair(1,2));
console.log(makePair2(1,2));



/*
Learn Lodash: _.drop, Drop the First Elements of an Array

According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.
Examples

drop([1, 2, 3], 1) ➞ [2, 3]

drop([1, 2, 3], 2) ➞ [3]

drop([1, 2, 3], 5) ➞ []

drop([1, 2, 3], 0) ➞ [1, 2, 3]

Notes

    Do not attempt to import lodash; you are simply writing your own version.
    This entire series of challenges can be found here.
*/




//method 1

function lodash(array,n) { 
    return array.slice(n )
}



console.log(lodash([1, 2, 3],1));
console.log(lodash([1, 2, 3],2));



// Question 4 -> Upvotes vs Downvotes

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Examples

// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// Notes

// You can expect only positive integers for vote counts.


function getVoteCount(obj) { 
    return obj.upvotes - obj.downvotes
}


console.log(getVoteCount({ upvotes: 13, downvotes: 0 }) );
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }) );
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));





/*
Question 5
Reverse an Array

Write a function to reverse an array.
Examples

reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []

Notes 
*/ 


function reverse(arr) { 
    return arr.slice().reverse()
}

console.log(reverse([9, 9, 2, 3, 4]));

function reverse1(arr) {
    let reversedArr = [] 
    for(let i = arr.length - 1; i >= 0 ; i-- ) { 
        reversedArr.push(arr[i])
    }
    return reversedArr
}


console.log(reverse1([9, 3, 2, 3, 4]));