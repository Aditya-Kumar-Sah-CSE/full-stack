//sequence of characters
// string never changes always make a copy

//declaring '',"",``

 // strings method
 //length
 //toUpperCase()
 //toLowerCase()
 //includes() = check 
 //indexOf() = return index of first occurrence of a substring
 //trim() = remove whitespace

 let str = ' Aditya Kumar Sah'
 console.log(str.length)

 console.log("before" ,str)
 console.log("after",str.toLocaleUpperCase(),str)//modify copy

 console.log(str.includes('A'))//true
 console.log(str.indexOf('t'))
console.log(str.trim())

//SubString(start,end) - extract sub str
//slice(start,end)-
//replace(old,new)
//split(separator)
//

let substring =str.substring(4 ,10)
console.log(substring)
console.log(str.slice(4,10))
console.log(str.replace('Kumar','Hii'))
let res = str.split(" ") // split by space
console.log(res)
console.log(str.charAt(4))

// date-time 

//date object
let currentDate = new Date();

console.log(currentDate.getFullYear())
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getDay())
console.log(currentDate.getDate())



console.log(currentDate)

//set interval() - repeate
 setInterval(()=>{
    console.log(`Aditya`)
 },1000)
//  to stop  ctrl + c 


//  every 2s call function  

// for delay use setTimeout only one time 
setTimeout(function () {
console.log('This runs after 4 s letes');

},4000)