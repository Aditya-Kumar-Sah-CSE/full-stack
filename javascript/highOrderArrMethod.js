//1.map() create new array 
//2.filter() return a new arr with test condition 
//reduce() return a single value for cal

let arr = [1,3,4,5,6,7,8,9]

let res = arr.map((el)=>el*2)
console.log(res)
let even = arr.filter((el)=>el%2 === 0)
console.log(even)

let sum = arr.reduce((prev,el)=>prev+el,0)//prev =0
console.log(sum)

//for in loop : 
const phone={
    brand:'iphone14',
    price:123133,
    camera:'123 mp'

}

for(let key in phone){
    console.log(key,phone[key])
}

// for...of loop
let brr=[1,2,3,4]
for(let value of brr){
    console.log(value)
}
//for each loop
brr.forEach((value,index,arr)=>console.log(value,index,arr))