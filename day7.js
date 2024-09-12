//Question 1
// Multiply Every Array Item by Two

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
// Examples

// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]


// solution 1 
function getMultipliedArr(arr) { 
    return arr.map(x => x * 2)
}

//solution 2 
function getMultipliedArr2(arr) { 
    let newArr = []
    arr.forEach(element => {
        newArr.push(element * 2)
    });
    return newArr
}

console.log(getMultipliedArr2([1, 86, -5]));



//Question 2

// Array of Word Lengths

// Create a function that takes an array of words and transforms it into an array of each word's length.
// Examples

// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

//Solution 1 

function wordLengths(arr) { 
    let wordLength = []
    arr.forEach(element => {
        wordLength.push(element.length)
    });
    return wordLength
}

//Solution2

function wordLengths2(arr) { 
    return arr.map(x => x.length)
}

console.log(wordLengths2(["Halloween", "Thanksgiving", "Christmas"]));



//Question 3

// First Class, Second Class and Third Class Levers

// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

//     In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
//     In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
//     In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.

// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.
// Examples

// determineLever(["e", "f", "l"]) ➞ "first class lever"

// determineLever(["e", "l", "f"]) ➞ "second class lever"

// determineLever(["f", "e", "l"]) ➞ "third class lever"

function determineLever(arr) { 
    if(arr[0] === "e" && arr[1] === "f" && arr[2] === "l") {
        return "first class lever"; 
    }
    else if(arr[0] === "e" && arr[1] === "l" && arr[2] === "f") {
        return "second class lever";
    }
    else if(arr[0] === "f" && arr[1] === "e" && arr[2] === "l") {
        return "third class lever";
    }
}
console.log(determineLever(["e", "f", "l"]));


//Question 4

// Difference of Volumes of Cuboids

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Examples

// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412



function findDifference(arr1,arr2) { 
    let volume_one = arr1[0] * arr1[1] * arr1[2]
    let volume_two = arr2[0] * arr2[1] * arr2[2]

    return Math.abs(volume_two - volume_one);

}



console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]));


//question 5 
// Spaces Between Each Character

// Create a function that takes a string and returns a string with spaces in between all of the characters.
// Examples

// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"


function spaceMeOut(str) { 
    return str.split('').join(' ')
}

console.log(spaceMeOut("space me"));