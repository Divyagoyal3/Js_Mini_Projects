
//separator function
arr = [1,2,4];
arrr = [1,2,4,5,6]
function avg( a , b , c){
    return a+b+c/3;
}
// let a = avg(...arr)
// let a =avg(...arrr);

//spread the array

 let a = [4,7,...arr, 67];

 //copy of array
//  let ag=[...arr];
// console.log(ag);




 let obj1 = {
    name1 : "harry",
    class1 : "5b",
    favlang: "javascript"
 }

//destructing
 let obj2 ={}
//  obj2.name1 = obj1.name1;
//  obj2.class1 =obj1.class1;
//  obj2.favlang ="Python"
let obj3 ={...obj1,favlang:"python"};
console.log(obj3);

//let name1= obj1.name1;;
// console.log(name1);

//destructing
let{name1,class1,favlang} = obj1;
console.log(name1,clss1,favlang);