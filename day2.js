/*
Fix the Bug: Simple Array Manipulation

Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
Examples

incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

Notes

Make sure to read every line carefully.
*/

//Solution 1

function incrementItems(arr) { 
    for(let i = 0; i < arr.length; i++) { 
        arr[i]++
    }
    return arr
}


console.log(incrementItems([0, 1, 2, 3]));


//using map
let num = [0, 1, 2, 3]

function incrementItemsMap1(array) {
     return array.map((item) => item + 1)
}


console.log(incrementItemsMap1(num));