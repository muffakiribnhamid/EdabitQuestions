// Less Than, Greater Than

// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
// Examples

// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []



// method 1 using filter

function arrBetween(a,b,arr) { 
    return arr.filter((x) => x > a && x < b)
}

console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));


function arrBetween2(a,b,arr) { 
    let newArr = []
    arr.forEach(element => {
        if(element > a && element < b) {
            newArr.push(element)
        }
    });
    return newArr
}


console.log(arrBetween2(1, 10, [1, 10, 25, 8, 11, 6]));


//Question 2

// 50-30-20 Strategy

// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
// Examples

// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }



function fiftyThirtyTwenty(income) { 
    let needs = income * 0.5
    let savings = income * 0.2
    let wants = income * 0.3
    return newObj = {'Needs' : needs , 'Wants' : wants , 'Savings' : savings}
}

console.log(fiftyThirtyTwenty(50000));



//Question 3



// Similar Bread

// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
// Examples

// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false

// Notes

//     The arrays will always be three elements long.
//     The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.


function hasSameBread(arr1,arr2) { 
    return arr1[0,2] === arr2[0,2]
}

console.log(hasSameBread(
     ["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]));





    //  Convert All Array Items to String

    //  Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
    //  Examples
     
    //  parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
     
    //  parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
     
    //  parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
     
    //  parseArray([]) ➞ []

    function parseArray(arr) { 
        return arr.map(x => (String(x)))
    }


    console.log(parseArray([1, 2, "a", "b"]));


    //Question 4 

    // Return Types

// Create a function that takes an array and returns the types of values (data types) in a new array.
// Examples

// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

// Notes

//     Check the Resources tab for help if needed.
//     Remember Arrays & Null in JS are treated as object, hence the examples




function arrayValuesTypes(arr) { 
    return arr.map((x) => typeof(x))
}


console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));


//Question 5

// Squares and Cubes

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
// Examples

// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true

// Notes

//     Remember to return either true or false.
//     All arrays contain two positive numbers.
//     If you're stuck, check the Resources for a hint.


function checkSquareAndCube(arr) { 
    let squareRoot = Math.sqrt(arr[0])
    let cubeRoot = Math.cbrt(arr[1])

    return squareRoot === cubeRoot
}


console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27]));
