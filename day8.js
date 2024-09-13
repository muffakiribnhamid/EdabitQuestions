//Question 1 
// Get the Sum of All Array Elements

// Create a function that takes an array and returns the sum of all numbers in the array.
// Examples

// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105

//Solution 1

function getSumOfItems(arr) { 
    return arr.reduce((acc,current) => acc + current)
}

//Solution 2

function getSumOfItems2(arr) { 
    let sum = 0;
    arr.forEach(element => {
       sum += element 
    });
    return sum
}


console.log(getSumOfItems2([1,2,4,10]));


//Question 2
// Even or Odd?

// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).
// Examples

// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"


function evenOrOdd(arr) { 
    let sum = arr.reduce((acc,current) => acc + current)
    if(sum % 2 == 0) { 
        return "Even"
    }
    else { 
        return "Odd"
    }
}

console.log(evenOrOdd([2,4]));


//Question3

// Invert an Array

// Create a function that takes an array of numbers arr and returns an inverted array.
// Examples

// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []


function invertArray(arr) { 
    return arr.map(x => x * -1)
}

console.log(invertArray([1, 2, -3, 4, 5]));


// Question 4 

// Rotate the Array by One 🔄

// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.
// Examples

// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]


function rotateByOne(arr) { 
    let last = arr[arr.length - 1]
    arr.pop()
    arr.unshift(last)
    return arr
}


console.log(rotateByOne([6, 5, 8, 9, 7]));



//Question 5

// Get the File Name

// Create a function that returns the selected filename from a path. Include the extension in your answer.
// Examples

// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"


function getFilename(str)  {
    let arr = str.split("/")
    return arr[arr.length - 1]
}
