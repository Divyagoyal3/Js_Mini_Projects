// let fs = require("fs");

//this file take time to read as below code is executed first

// fs.readFile("file.txt","utf-8",(err,data) =>{
//     console.log(err,data);
// })






//promises make promise that i have been read 

let fs = require("fs/promises");

let a = fs.readFile("file.txt" , "utf-8");

//it will show promises are pending if a. then method is not been used
// console.log(a);
// a.then((data) =>{
//     console.log(data);
// })
console.log("This is  eof");

//async function runs in background but await for a timeperiod untill particular code is not been executed and execute in sequences 
//it is wau to execute the code in sequeence
const readthree = async (filee,file2,file3) =>{
    let a1 = fs.readFile(filee, "utf-8");
    let a2 = fs.readFile(file2,"utf-8");
    let a3 = fs.readFile(file3,"utf-8");
    let c3 = await a3;
    console.log(c3);
    let c2= await a2;
    console.log(c2);
    let c1 = await a1;
    console.log(c1);
}

readthree("filee.txt","file2.txt","file3.txt");