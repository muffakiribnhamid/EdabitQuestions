// Cleaning Up Messy Arrays

// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.
// Examples

// cleanUpArray(["8"]) ➞ [[8], []]

// cleanUpArray(["11"]) ➞ [[], [11]]

// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]

// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]


function cleanUpArray(arr) {
    let evenEl = []
    let oddEl = []
    let finalArr = []

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenEl.push(Number(arr[i]))
        }
        else if (arr[i] % 2 != 0) {
            oddEl.push(Number(arr[i]))
        }

         finalArr = [evenEl,oddEl]
    }
       
        return finalArr
        
}

console.log(cleanUpArray(["1003", "12", "8"]));






// Largest Numbers

// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.
// Examples

// largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

// largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

// largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

// largestNumbers(0, [1, 3, 4, 2]) ➞ []


function largestNumbers(n,arr) {
    let descendingArr = arr.sort((a,b) => a - b)
    let slicedArr = descendingArr.slice(-n)
    if(n == 0) { 
        return []
    }
    else {
        return slicedArr
    }
        
    }
    
    

console.log(largestNumbers(0, [1, 2, 3, 4, 8, 7, 6, 5]));



// Less Than 100 Array Remix

// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.
// Examples

// arrayLessThan100([5, 57]) ➞ true

// arrayLessThan100([77, 30]) ➞ false

// arrayLessThan100([0]) ➞ true


function arrayLessThan100(arr) {
    let sumOfArr = arr.reduce((acc,current) => acc + current)
    if(sumOfArr < 100) {
        return true
    }
    return false
}

console.log(arrayLessThan100([0,0]));


// Arithmetic Progression

// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

//     First element of the sequence first
//     Constant difference between the elements diff
//     Total numbers in the sequence n

// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.
// Examples

// arithmeticProgression(1, 2, 5) ➞ "1, 3, 5, 7, 9"

// arithmeticProgression(1, 0, 5) ➞ "1, 1, 1, 1, 1"

// arithmeticProgression(1, -3, 10) ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"


function arithmeticProgression(a,b,c) {
    let difference = b;
    let first = a;
    let finalArr = Array.from({length : c}, (_,i) => first + i * difference)
    return finalArr.join(', ')


}

console.log(arithmeticProgression(1,2,4));


// How Much is True?

// Create a function which returns the number of true values there are in an array.
// Examples

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// Notes

//     Return 0 if given an empty array.
//     All array items are of the type bool (true or false).


function countTrue(arr) {
    return arr.filter(Boolean).length;
}

console.log(countTrue([true, false, false, true, false]));



