// person  ka properties

const person1={
    name:'Aditya',
    age: 20,
    phone:'s24 ultra',

}

console.log(person1.name)

// spread operator --copy clone
 
const person2= {...person1,name:'Bitt'}

console.log(person2)

// * destructuring
 const {name,age} = person1;
 // bahar nikhalna 

 console.log(name,age)

//  Arrays - methods
let arr = ['Hi',1,6,1,4, true,null]
console.log(arr)

//1.push() - add a element at last
// 2.pop()- delete last
//3.shift() -delete first;
//4.unshift() - add first
//5.length
//6.find
//7.includes() hai ki nhi
//8.concat() marge
//9.join() convert arr to string
//10.splice(index,num of value,values) - add remove elements
//11.slice() -a sallow copy of portion
//12.sort()
//13.findIndex()
//14.from() -string to arr
//15.isArray()
arr.push(32);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(6)
console.log(arr)
console.log(arr.length)


let found = arr.find((el)=> el >2)
// el all element pass : call back value
console.log("find "+found)

// include
console.log(arr.includes(13))
let brr = ['ak' ,'bg']
let merge = arr.concat(brr) 
console.log(merge)


let res=arr.join(" ")
let res1= arr.join("-")
console.log(res)
console.log(res1)

let element = arr.splice(2,1,'bolo')
console.log(element)
console.log(arr)

/*[
  6,      1,
  'bolo', 1,
  4,      true,
  null
]*/
let result = arr.slice(1,4)
console.log(result)

let br = [ 5,6,1,2,8,4];

console.log(br.sort((a,b) => b-a))//descending
console.log(br.sort((a,b)=>a-b))//ascending

// findIndex
console.log(br.findIndex((el)=> el>5))

//
let str = " BCE Bhagalpur"
let crr = Array.from(str)
console.log(crr)

console.log(Array.isArray(str))//false
console.log(Array.isArray(crr))//true