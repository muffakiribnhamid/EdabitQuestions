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




// Array of Multiples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

//approach
// generate an array with numbers from n to length

function arrayOfMultiples(a,n) {
    const multiples = []
    for(let i = 1; i <= n; i++) {
        multiples.push(a * i)
    }
    return multiples


}

//Write a function createArray(n) that takes a number n as an argument and returns an array containing all the integers from 1 to n.


function createArray(n) {
    let newArr = []
    for(let i = 1; i <= n; i++) {
        newArr.push(i)
    }
    return newArr
}
console.log(createArray(5));

function createArray2(n) {
    return Array.from({length : n}, (_,i) => i + 1)
    
}
console.log(createArray2(5));

//Problem 2: Sum of an Array
// Write a function sumArray(arr) that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumArray(arr) {
    let sum = 0
    if(Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            sum+=arr[i]
        }
    }
    return sum

}

console.log(sumArray([1,1,2,3]));


function sumArray2(arr) {
    if(Array.isArray(arr)) {
        return arr.reduce((acc,current) => acc + current)
    }
}
console.log(sumArray2([1,1,2,3]));

//Write a function factorial(n) that takes a non-negative integer n and returns the factorial of n (i.e., the product of all positive integers up to n).

function factorial(n) {
    if(n < 0) return "Factorial Won't work on Negative Numbers"
    if(n == 0) return 1;

    let product = 1;
    for (let i = 1; i <= n; i++) {
        product *= i;
        
    }
    return product
}

console.log(factorial(0));

// Problem 1: Reversing a String

function reverseString(str) {
    return str.split('').reverse().join('')
}
//Solution2
function reverseString2(str) {
    let reversedArr = []
    for(let i = 0; i < str.length; i++) {
        reversedArr.push(str[i])
        
        
    }
    return reversedArr.reverse().join('')
}
console.log(reverseString2('Coder'));


//Problem 2: Finding the Maximum Number in an Array

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined; // Handle edge case if arr is empty or not an array
    }

    let num = arr[0]
    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > num) {
                num = arr[i]
            }
            
        }
        return num
    }

}



//Problem 3: Palindrome Check

function palindromeCheck(str) {
    let originalStr = str;
    if(typeof str == "string" && str != '') {
        let reversedStr = str.split('').reverse().join('')
        return originalStr == reversedStr
        
    }
    return false
}

console.log(palindromeCheck('hello'));
console.log(palindromeCheck('racecar'));
