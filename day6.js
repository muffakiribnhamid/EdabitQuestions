//Question 1 
// Array of Strings to Array of Numbers

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]

// Examples

// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// Notes

// Some inputs are floats.



function toNumberArray(arr) { 
    return arr.map(x => Number(x))
}


console.log(toNumberArray(["91", "44"]));



//Question 2 

// Burglary Series (14): Adjectives Total

// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.
// Examples

// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4

// Notes

// The list will never be empty (no empty object).



function totalAmountAdjectives(obj) { 
    return Object.values(obj).length
}


console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));


//Question 3

// Recreating the String.length Property

// Create a function which returns the length of a string, WITHOUT using String.length property.
// Examples

// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16


//Soluton 1
function length(str) {
    let c = 0;
    let strSplit = str.split('')
    strSplit.forEach(element => {
        c++
    });
    return c
}


//Soluton 2
function length2(str) { 
    let co = 0;
    for(const words in str) { 
        co++
    }
    return co
}


console.log(length2('edabit'));



//Question 4


// Half, Quarter and Eighth

// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// Examples

// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

// Notes

// The order of the array is: half, quarter, eighth.


function halfQuarterEighth(n) { 
    let half = n/2
    let quarter = n/4
    let eighth = n/8

    return arr = [half,quarter,eighth]
}


function halfQuarterEighth2(n)  {
    return [2,4,8].map(divisor => n / divisor)
}




console.log(halfQuarterEighth2(25));



//Question 5 



// Shapes With N Sides

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.






function returnShapeNum(n) { 
    let shapes = ["circle","semi-circle","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"]
    return shapes[n - 1]
}


console.log(returnShapeNum(3));