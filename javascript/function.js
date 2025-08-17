function sum(a,b){
    return a+b;
}
// * parameter me data type declare nhi karna h
console.log(sum("Aditya" , " Kumar")) //* Aditya Kumar
console.log(sum(2,4)) //* 6

function greet(name){
    return `Hello ${name}`
}

console.log(greet("Aditya Kumar Sah "))

//* Arrow function 

// variable is function name 

let name = () => console.log("Aditya Kumar Sah")

// call
name()

let sum1 = (a,b)=> {
    return a+b

    // jab {braces} lge ga to return karna hog
}
console.log(sum1(12,3))

//  Call back function : that is pass as argument to another function 
const print = ( ) => {
    return console.log("Print ho gaya ")
}
let test =(nam,callback) => {
    console.log('inside a fxn')
    callback();
}
// parameter me fxn name callback h the it must be call 

test('Aditya',print)

// print function ko  argument   ke tra pass kia 