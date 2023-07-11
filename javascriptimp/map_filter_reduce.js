 let a = [1,2,3,4];

 //map function is used to map a complete array into a new array
 let a2 = a.map((value) =>{
    return value*2;
})
//it will not affect original array
console.log(a,a2);

//filter will filter the value from the array

let a3 = a.filter((value) =>{
    return value >6;
})
console.log(a, a3);

//reduce function will reduce the array 
let a4 = a.reduce((val1, val2) =>{
    return val1+val2;
})
console.log(a,a4);
//  1+2 3 4  = 3 3 4
// 3+3 4 = 6 4
// 6+4 = 10
