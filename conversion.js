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

let numArray = [1,"122",3]
console.log(typeof numArray, numArray, numArray[1]);