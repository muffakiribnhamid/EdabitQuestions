//Question 1
// Binary Array to Decimal

// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
// Examples

// binaryToDecimal([0, 0, 0, 1]) ➞ 1

// binaryToDecimal([0, 0, 1, 0]) ➞ 2

// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005

// Notes

// N/A

//Solution 

function binaryToDecimal(arr) { 
    let decimal= 0;
    for (let i = 0; i < arr.length ; i++) {
        let power = arr.length - i -1
        decimal += arr[i] * Math.pow(2,power)
    }
    return decimal

}

console.log(binaryToDecimal([0, 0, 0, 1]));


//question 2

// True Ones, False Zeros

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// Examples

// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]

// Notes

// Expect numbers with 0 and 1 only.

//solutoion 1 

function integerBoolean(str)  {
    return str.split('').map(el => el === '1')
}

function integerBoolean1(str) { 
    let arrStr = str.split('')
    let resultArr = []
    for (let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] == '0') { 
            resultArr.push(false)
        }
        else if(arrStr[i] == '1') {
            resultArr.push(true)
        }
        
    }
    return resultArr
}


console.log(integerBoolean('100101'));



// Designing Rugs

// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

//     The default character (hash #) repeating n times (if no proc is given).
//     The character passed in through the proc repeating n times.

// Examples

// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// ]


function makeRug(rows,columns,char = "#") { 
    for (let i = 0; i < rows; i++) {
        console.log(char);
         
    }
}

makeRug(4,4)