//   1.Ways to print in javascript
// console.log("This is me");
// alert("This is me");
// docment.write("this is document write")    not used usually
// alert("This is me");


//2. javascript console API
// console.log("This is me", 4 + 6, "Another log");
// console.warn("This is me");
// console.error("This is me");

// 3. javascript variables
// what are variables? - container to store data valuesber1=
var number1 = 2;
var number2 = 3;
console.log(number1 + number2);

// 4.Data types in javascript 

// numbers
var num1 = 2;
var num2 = 5;

//  strings
var str1 = "This is string";
var str2 = "This is also a string";

//  objects
var marks = {
    vrinda: 20,
    shagun: 20,
    deepak: 20
}
console.log(marks);

// Boolean
var a = true;
var b = false;
console.log(a, b);


var und = undefined;
console.log(und);

var n = null;
console.log(n);
/* 
At very high level, there are two types of data types in javascript
1. Primitive data types:undefined, num, string, boolean, symbol
2. Reference data types: Arrays and objects
*/

var arr = [1, 2, 3, 4, "vrinda"]
console.log(arr);

//  Operators in javascript
var a = 2;
var b = 4;
console.log("The value of a+b is", a + b);
console.log("The value of a+b is", a - b);
console.log("The value of a+b is", a * b);
console.log("The value of a+b is", a / b);

// Assignment operators
var c = b;
// c+=2;
//   c -= 2;     
//  means  c=c-2; 
// c *= 2;
// c += 2;
console.log(c);

// comparison operators
var x = 2;
var y = 5;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x < y);
console.log(x > y);

// Logical operators and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical operators or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical operators not( logical not)
console.log(!false);
console.log(!true);


// Function in javascript
// DRY= dont not repeat yourself

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(2, 2);
c2 = avg(5, 5);
console.log(c1, c2);





/*function sum(a,b,c)
 {
    d = (a + b+c)
    return d;
}
c1 = sum(2, 2, 3);
c2 = sum(5, 5, 3);
console.log(c1, c2); */

// conditionals in javscript
// if statement
var age = 34;
if (age > 8) {
    console.log('You are not a kid');
}

// if-else statement
var age = 34;
if (age > 8) {
    console.log('You are not a kid');
}
else {
    console.log('You are a kid');
}

// if-else ladder statement
var age = 34;
if (age > 32) {
    console.log('You are not a kid');
}
else if (age > 54) {
    console.log('You a kid');
}
else if (age > 18) {
    console.log('You are not good  kid');
}
else {
    console.log('You a brilliant kid');
}
console.log('End of ladder');


// loop(for)
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// arr.forEach(function(element){
//     console.log(element)                    //same as console.log(arr)
// })


// const ac=0;         example if constant variable is assigned
// ac++;
// ac= ac+1;


// loop(while): condition checked then execution

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


// loop do-while :for once loop work then condition is checked thats why result is undefined

do {
    console.log(arr[j]);
    j++;

} while (j < arr.length);


// break statement
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        break;
    }
    console.log(arr[i])
}

// continue statement
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 3) {
        continue;
    }
    console.log(arr[i])
}

// Array methods

// let myArr = ["fan", "camera", 34, null, true];

// console.log(myArr.length);
// myArr.pop();           /*to remove one element from the end of the array*/
// myArr.push("vrinda");    /*to add element into array*/
// myArr.shift();        /*to remove one element of the array fron the start*/

// console.log(myArr.unshift("vrinda"));
// //    unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// OR
// const newLen = myArr.unshift("vrinda")
// console.log(newLen)

// myArr[4] = "toffee";           /*Array elements are accessed using their index number*/

// delete myArr[4];            /*Deleting elements leaves undefined holes in an array*/
// console.log(myArr);



// // const arr1 = ["1", "2", "3"];
// const arr2 = ["4", "5", "6"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const arr1 = ["1", "2", "3"];
// const arr2 = ["4", "5", "6"];
// const arr3 = ["7", "8", "9"];
// const arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);

// const arr1 = ["1", "2", "3"];
// const arr2 = arr1.concat("vrinda");
// console.log(arr2);


/*The concat() method is used to merge two or more arrays*/
/*This method does not change the existing arrays, but instead returns a new array.*/

// string methods in javascript



// console.log(mylovelystring.length)
// console.log(mylovelystring.indexOf("good"))

// console.log(mylovelystring.lastIndexOf("good"))

// console.log(mylovelystring.slice(1,3))
// console.log(mylovelystring.replace("good","bad"));
// console.log(mylovelystring.toUpperCase("good"));
// console.log(mylovelystring.toLowerCase("good"));

// let mylovelystring1 = "vrinda is a good girl";
// let mylovelystring2 = mylovelystring1.concat("vrinda is a bad girl");
// console.log(mylovelystring2);


let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());

// DOM manipulation
// let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);



//  ## get element by tagname just like getelementbyId

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);  /* 1.to add a child*/


createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created bold";
tn[0].replaceChild(createdElement2, createdElement); /*2. to replace a child*/
//   tn[0] represents first div


//  removeChild(element); ---> /*3.removes an element*/





// Selecting using Query:   

/*A selector is used to identify each component uniquely into the 
component tree, and it also defines how the current component 
is represented in the HTML DOM.*/



// sel= document.querySelector('.container')
//  console.log(sel);

// sel= document.querySelectorAll('.container')
// console.log(sel);


function clicked() {
    console.log("the button was clicked");
}


window.onload = function () {
    console.log('the document was loaded')
}



// Events in javascript

/*JavaScript's interaction with HTML is handled through events 
that occur when the user or the browser manipulates a page. 
When the page loads, it is called an event. When the user clicks a button,
that click too is an event. Other examples include events like pressing any
 key,closing a window, resizing a window, etc.*/

firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("clicked on container");
})

//  firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
//  })


//  firstContainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
//  })


//  firstContainer.addEventListener('mouseup', function(){
//     console.log("mouse up of container");
//  })


//  firstContainer.addEventListener('mousedown', function(){
//     console.log("mouse down of container");
//  })


// Arrow functions

// function summ(a, b) {
//     return a+b;
// }

summ = (a, b) => {       /* beacuse of this aroow syntax it is known as arrow function, used when 
we have to insert function in between*/
    // return a + b;
}






logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b>"
    //     console.log("I am your log");
}


// setTimeout and setInterval

clr = setTimeout(logKaro, 2000);
// setInterval(logKaro, 2000);
//  clr=setInterval(logKaro, 2000);

/* use clearInterval/clearTimeout to cancel setInterval/setTimeout*/

// javascript local storage
// localStorage.setItem('name','vrinda')
// localStorage
// localStorage.getItem('name')

// /*JSON*/    used for exchanging data, used to exchange information 
// between web clients and web servers. 

obj = { name: "harry", length: 1, a:{ this: 'tha"t' } }
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);