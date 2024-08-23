// Return the Last Element in an Array

// Create a function that accepts an array and returns the last item in the array.
// Examples

// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

// Notes

//     Don't forget to return the result.


//using bracket notations

function getLastItem(arr) { 
    return arr[arr.length - 1]

}


console.log(getLastItem(["cat", "dog", "duck"]));

//using pop


function getLastItem2(arr) { 
    return arr.pop()

}


console.log(getLastItem2([1, 2, 3]));




/*
ES6: Destructuring Arrays I

You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2

With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
*/

const [a,b] = [1,2]

console.log(a); //1
console.log(b); //2



/*
Convert an Array to a String

Create a function that takes an array of numbers or letters and returns a string.
Examples

arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
*/



//using toString()
function arrayToString(arr) { 
    return arr.toString()
}




console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));

//using for loop

function arrayToString2(arr) { 
    let str = ""
    arr.forEach(element => {
        str += element
    });
    
    return str
}


console.log(arrayToString2(["a", "b", "c", "d", "e", "f"]));

//using join


function arrayToString3(arr) { 
    return arr.join('')
}



console.log(arrayToString3(["a", "b", "c", "d", "e", "f"]));


/*
Concatenating Two Integer Arrays

Create a function to concatenate two integer arrays.
Examples

concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

Notes

    Don't forget to return the result.
    See Resources tab for more info.
*/



//using concat
function concat(arr,arr2) { 
    return arr.concat(arr2)
}


console.log(concat([1, 3, 5], [2, 6, 8]));

//using push


function concat2(arr,arr2) { 
    arr.push(...arr2)
    return arr
}

console.log(concat2([1, 3, 5], [2, 6, 8]));


//using forEach()


function concat3(arr,arr2) { 
    arr2.forEach(el =>  { 
        arr.push(el)
    })
    
    return arr
}



console.log(concat3([1, 3, 5], [2, 6, 8]));


// Find the Index

// Create a function that takes an array and a string as arguments and returns the index of the string.
// Examples

// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// Notes

//     Don't forget to return the result.
//     If you are stuck, find help in the Resources tab.




//using indexOf
function findIndex(arr,word) { 
    return arr.indexOf(word)
}

console.log(findIndex(["a", "g", "y", "d"], "d") ); //3



// Array Indexing

// Given an index and an array, return the value of the array with the given index.
// Examples

// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4




function valueAt(arr,num)  {
    return arr.at(Math.floor(num))
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2) );



// Find the Index (Part 1)

// Create a function that finds the index of a given item.
// Examples

// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1

// Notes

// If the item is not present, return -1.


function search(arr,el) { 
    return arr.indexOf(el)
}

console.log(search([1, 5, 3], 5));