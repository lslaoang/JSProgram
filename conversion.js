let num = Number("1234")
console.log(typeof num);

// explicit conversion
console.log(typeof String(num));

let number = 12
let str = "this string"

console.log(typeof number, typeof str);

// implicit conversion
let wildcard = number + str
console.log(typeof wildcard, wildcard);
let  wildcard2 = 78 + "1222"
console.log(typeof wildcard2, wildcard2);


// Array 
let numArray = [1,"122",3]
console.log(typeof numArray, numArray, numArray[1]);

// Function declaration
function printArray(Array) {
    console.log("Elements of this array are: ", Array);
}

printArray([1,2,2,2,2]);

function returnStr(params) {
    return params;
}

console.log("Return string: ", returnStr("String msg!"));

function returnOperationResult(a, b, c){
    return a + b + c;
}

// Polymorphic function
console.log("Result  of the operation: ", returnOperationResult(1,2," 1224")); // Arithmetic first
console.log("Result  of the operation: ", returnOperationResult("This string ",2,23)); 
console.log("Result  of the operation: ", returnOperationResult(1,2,12.3));