//Question 1
// Skip the Drinks with Too Much Sugar

// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

//     cola
//     fanta

// Examples

// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]


//solution 1
function skipTooMuchSugarDrinks(arr) { 
    return arr.filter(x =>  x !== 'cola' && x !== 'fanta')
}

console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

//solution 2

function skipTooMuchSugarDrinks2(arr) { 
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 'cola' && arr[i] !== 'fanta') { 
            result.push(arr[i])
        }
    }
    return result
}
console.log(skipTooMuchSugarDrinks2(["lemonade", "beer", "water"]));


//Question 2

// Add the Index

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
// Examples

// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]



//Solution 1 

function addIndexes(arr)  {
     return arr.map((x,i) => x+i)
}

console.log(addIndexes([5, 4, 3, 2, 1]));

//Solution 2

function addIndexes2(arr) { 
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + i)
        
    }
    return result
}
console.log(addIndexes2([5, 4, 3, 2, 1]));


//Question 3

// Array From a Range of Numbers

// Create a function that returns an array of all the integers between two given numbers start and end.
// Examples

// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

// Notes

//     start will always be <= end.
//     start and end are NOT included in the final array.
//     If start == end, return an empty array.



function rangeOfNum(x,y) { 
    let newArr = []
    for (let i = x  + 1; i <= y - 1; i++) {
        newArr.push(i)
        
    }
    return newArr
}
console.log(rangeOfNum(1,7));

//sol 2 

function rangeOfNum2(x,y) { 
    return Array(y-x-1)
    .fill(0)
    .map((_,i) => x + 1 + i )
}
console.log(rangeOfNum2(1,7));


//Question 4
// Sum Greater Than Five

// Write a function that returns the sum of elements greater than 5, in the given array .
// Examples

// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

// Notes

// Find all the elements greater than 5, not the elements greater than or equal to 5.


//Solution 1 
function sumFive(arr)  {
    return arr.reduce((acc,current) => current > 5 ? acc + current : acc , 0)
}

console.log(sumFive([1,2,3,4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));


//Question 5
// Filter Strings from Array

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// Examples

// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []


function filterArray(arr) { 
    return arr.filter(x => typeof x === "number")
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
