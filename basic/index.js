//   //1.ways to print in js
   
//   alert("hi");
//   document.write("this is document write");

//   //2.javascript console api 
//   console.log("helllo");
//   console.error("error");
//   console.warn("this is warning to you");
//   //console.assert(4==6)
//   //console.assert(4==(6-8))

//   // 3.variables in js
//   // what are variables =contaniers to store data values
// /*multi 
// line 
// comment */
//   var number1 = 34;
//   var number2= 56;
//   console.log(number1 + number2);
// // let variable cannot be redeclared. variable define with let must br declared bfore  use and let keyword have block scope
//   let c ="jon";
//  // not possible let c=0;
// //  {
// //     let c=0;
// //  }

// //   not possible// {
// //     var c=0;
// // }
// console.log(c);
// // using keyword var we can redeclare
// var x=0;
// var x=1;

// //const keyword cannot be redeclare and it has block scope.
// const v=0;
// // not possible const v=1;

// // 4 . data types in javascript
//  var str1="this is a string";
//  var str2='This is also a string';
//  var number=45;


//  console.log(str1);
//  console.log(str2);
//  console.log(number);
//  //objects
//  var marks ={
//     ravi:34,
//     shubham:78,
//     harry:56
//  }
// //  console.log(marks);

//  //var und = undefined;
//  // if u do not intialize value to variable it show the result as undefined
//  // it is basically used to create difference between null and undefined value;
//  var und;
// //  console.log(und);

 
// //nulll values
// // var n = null;
// // console.log(n);

// //boolean
// var a =true;
// var b= false ;
// // console.log(a,b);


// // two types of data types 
// // 1. primitive data types:undefined, null, number,string,boolean,symbol,
// // 2. reference data types:arrays, objects

// Symbol('string');

// var a =[1,2,"bablu",4,5];
// console.log(a);


// //5.operators
// // arithmetic operators 
// var f= 34;
// var h = 76;
// // console.log("the value of a+b is",f+h);
// // console.log("the value of a-b is",f-h);
// // console.log("the value of a*b is",f*h);
// // console.log("the value of a/b is",f/h);

// //assignement operator 
// var o=b;
// o+=6;
// o*=10;
// o/=60;
// // console.log(o);

// //comparision operators
// var x= 34;
var y =56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);


//logical operators

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// //logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// //logical or
// console.log(!false);
// console.log(!true);


//functions

function avg(a,b){
   c=(a+b)/2;
   return c;
}
c=avg(4,6);
c2=avg(14,16);

console.log(c,c2);

// function myFunction() {
//   let text;
//   let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
//   switch(favDrink) {
//     case "Coca-Cola":
//       text = "Excellent choice. Coca-Cola is good for your soul.";
//       break;
//     case "Pepsi":
//       text = "Pepsi is my favorite too!";
//       break;
//     case "Sprite":
//       text = "Really? Are you sure the Sprite is your favorite?";
//       break;
//     default:
//       text = "I have never heard of that one..";
//   }
//   document.getElementById("demo").innerHTML = text;
// }



//conditional operators

var age=4;
if(age > 18)
console.log('you canoot drink water');
else
console.log('you can do it');


// if(age > 18)
// console.log('you canoot drink water');
// else if(age >29)
// console.log('you can do it');
// else if(age >87)
// console.log('18 bacche nahi rhe');
// else{
// console.log("Bachhe hai");
// }


//loops

var arr= [1,4,7,9,8];
for (var i =0 ; i<arr.length; i++)
{
  if(i ==2)
  {
   // break;
   continue;
  }
  console.log(arr[i]);
}

// arr.forEach(function(element){
//   console.log(element);
// })

let j =0;
// const aa=0;
// aa++;  throughs an error

// let jk=0;
// while(jk<arr.length)
// {
//   console.log(arr[jk]);
//   jk++;
// }


// let m=0;
// do{
//   console.log(arr[m]);
//   m++;
// }while(m<arr.length);




let myArr =["fan", "camera",98,null,true];
//Array Methods
console.log(myArr.length);
myArr.pop();
console.log(myArr.length);
 myArr.push("haary");
 console.log(myArr.length);
myArr.shift();
console.log(myArr.lastIndexOf());

// const newl=myArr.unshift("potter");
// console.log(newl);


//strings in js
let mystring= " a harry bhai is a good boy good good";
// console.log(mystring.length);
// console.log(mystring.indexOf("haary"));
// console.log(mystring.lastIndexOf("good"));

// console.log(mystring.slice(1,4));
// d = mystring.replace("harry","amit");
// console.log(d,mystring);


//dom manipulation

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());
// console.log(myDate.getHours());

//dom manipulation
let ele = document.getElementById('click');
console.log(ele);

let eleclass = document.getElementsByClassName('conatiner');
console.log(eleclass);
// eleclass[0].style.background = "cyan";

// eleclass[0].classList.add("bg-primary");
// eleclass[0].classList.remove("text-sucess");
//  eleclass[0].innerHTML
//eleclass[0].innerText;

console.log(ele.innerHTML);
console.log(ele.innerText);

// console.log(eleclass[0].innerHTML);
// console.log(eleclass[0].innerText);


tn = document.getElementsByTagName('div');
console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "this is  a created paragraph";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "this is  a created  bold paragraph";
tn[0].replaceChild(createdElement2,createdElement);


// document to querselector
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);
// removechild(element) --> remove an element

//dicument.location
// document.title
// document.scripts
//document.url
// document.images
// documents.links
// 

// events
function clicked() {
  console.log('the button was clicked')
}


window.onload = function() {
    
  console.log("loaded");
}

// firstContainer.addEventListener('click', function(){
//   console.log("Click hogya");
// })

// firstContainer.addEventListener('mouseover', function(){
//   console.log("mouse contanier");
// })


// firstContainer.addEventListener('mouseout', function(){
//   console.log("Mouse out ");

// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//   document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("Mouse Up");
// })


// firstContainer.addEventListener('mousedown', function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>" 
//   console.log("Mouse down");
// })

// ARROW FUNCTIONS
function sum(a,b) {
  return a+b;
}

sum2 = (a,b) =>{
  return a-b;
}



logkaro =() =>{
  document.querySelectorAll('.conatiner')[0].innerHTML ="<b> set interval fire </b>"
  console.log(" I m in log")
}
// settimeout and setinterval
setTimeout(logkaro,2000);