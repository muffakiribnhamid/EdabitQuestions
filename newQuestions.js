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



//find max
// findMax([4, 7, 1, 9, 2]); // Output: 9

function findMax(arr) {
    let max = arr[0];
    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i]
            }
        }
}
    return max

}

console.log(findMax([-3, -7, -1, -9]));


//Write a function countVowels(str) that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. Both uppercase and lowercase vowels should be counted.


function countVowels(str) {
    let vowels = ['a','e','i','o','u']
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) { // Check if the char is a vowel
            count++; // Increment the count if it's a vowel
        }
    }
    return count
}
console.log(countVowels('Javascript'));

// Find the Smallest and Biggest Numbers

function minMax(arr) {
    let min  = arr[0]
    let max = arr[0]
    if(Array.isArray(arr)) {
       for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i]
            }
            else if (arr[i] < min) {
                min = arr[i]
            }
       }

    
    }
    return [min,max]
}

console.log(minMax([2333,3,233,12,111]));



//Check if One Array can be Nested in Another

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.


function canNest(arr1,arr2) {
    let min1  = arr1[0]
    let max1 = arr1[0]
    let min2  = arr2[0]
    let max2 = arr2[0]

    if(Array.isArray(arr1) && Array.isArray(arr2)) {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] > max1) {
                max1 = arr1[i] // get max for arr 1 
            }
            else if (arr1[i] < min1) {
                min1 = arr1[i]  // get min for arr 1
            }
       }
       
       // Similarly for arr 2
       for(let i = 0; i < arr2.length; i++) {
           if(arr2[i] > max2) {
               max2 = arr2[i] // get max for arr 1 
           }
           else if (arr2[i] < min2) {
               min2 = arr2[i]  // get min for arr 1
           }
      }

      if(min1 > min2 && max1 < max2) {
            return true
      }
      else {
        return false
      }
        
    }
}



console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([9, 9, 8], [8, 9]));


// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0

function sumOfCubes(arr) {
    let cubeArr = []
    if(Array.isArray(arr)) {
        cubeArr =  arr.map((i) => i ** 3)
    }
    return cubeArr.reduce((acc,current) => acc + current)

}

console.log(sumOfCubes([3, 4, 5]));


// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
// Notes
// Arrays start at index 0.


function getOnlyEvens(arr) {
    let returnArr = []
    if(Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 == 0 && i % 2 == 0) {
                returnArr.push(arr[i])
            }
        }
        return returnArr

        }

}

console.log(getOnlyEvens([0, 1, 2, 3, 4]));





// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []



function parseArray(arr) {
    let newArr = []
    if(Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            newArr.push(String(arr[i]))
        }
    }
    return newArr
}


console.log(parseArray([1,2,3,'w,s']));
