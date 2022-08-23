
// // var i=1;
// // while(i<=50){
// //     console.log("2 X " + i +" = "+ 2*i);
// //     i++;
// // }

// //   for(var i=1;i<=50;i++){
// //     console.log("2 X " + i +" = "+ 2*i)
// //   }



// //   for(var i=1;i<=50;i++){
// //     if(i%3==0){
// //         console.log("Multiple's of 3"+" = " + i);
// //     }
// //      if(i%5==0){
// //         console.log("Multiple's of 5" +" = " + i);

// //     }

// //   }

// // console.log("Hello World");


// //   var a=2;
// //   var b=2;
// //  console.log("The value of a+b is", a+b);




// // var i=1;
// // for(i=1;i<=20;i++){
// //     console.log("square root of" + i + " is "+ i*i)
// // }

// //  var base=9;
// //  var height=3;
// //   var area=(base*height)/2;
// //  console.log("Area of triangle is"+ ":" + area);


// // var a=2;
// // var b=3;
// // [a,b]=[b,a];
// // console.log(a,b);



// // var a=2;
// // var b=4;
// // var c=a;
// // a=b;  //value of a is 4 abd value of b is also 4
// // b=c;
// // console.log(a,b);

// // var arr=[1,2,3,4];
// // for(var i=0;i<=arr.length()-1;i++){
// //     console.log(arr[i]*arr[i]);
// // }


// // var myArr=[34,32,4];
// //  console.log( myArr[2]);

// // var myArr=[34,32,4];
// //  console.log( myArr.length-2);

// // var myArr=["shagun",34];
// // console.log(myArr.length);

// // var str="vrinda";
// // console.log(str.length-1);



// // var myArr=[34,24,56];
// // myArr[2]=87;
// // console.log(myArr);


// // var myArr=[[2,3,4],[5,4,3],[[7,5,1],19,8]];
// // // var myData =myArr [2][1];      it will give answer 19
// // var myData =myArr [0][0];
// // console.log(myData);


// // var  sum=0;
// // function addThree(){
// //     return (sum +=3);

// // }


// //  function testEqual(val){
// //     if(val==10){
// //     return "equal";
// //  }
// //  return "Not equal";
// // }


// //  console.log(testEqual(10));



// // function compareEquality(a,b){
// //     if(a==b){
// //         return "Equal";
// //     }
// //     return 'Not Equal';
// // }
// // console.log(compareEquality(10, "10"))          *(here string is also converted into number thats why its equal i.e a=b)


// // function compareEquality(a,b){
// //     if(a===b){
// //         return "Equal";
// //     }
// //     return "Not Equal";
// // }
// // console.log(compareEquality(10, "10"))




// // function checkCondition(num) {
// //     if (num < 5) {
// //         return "tiny";
// //     } else if (num < 10) {
// //         return "small";
// //     } else if (num < 15) {
// //         return "medium";
// //     } else if (num < 20) {
// //         return "large";
// //     } else {
// //         return "huge";
// //     }

// // }
// //  console.log(checkCondition(15));


// //  function percentage(a,b){
// //     return (a*b)/2;
// //  }
// //   console.log(percentage(5,3));


// /*OBJECTS*/
// //  var myDog ={
// //     "name": "diesel",
// //     "legs": 4,
// //     "tails":1,
// //     "friends": ["All"]
// //  };
// // console.log(myDog.tails);



// /*if wanna add more properties to an object*/
// // var myDog = {
// //     "name": "diesel",
// //     "legs": 4,
// //     "tails": 1,
// //     "friends": ["All"]
// // };

// // myDog.bark = "bow bow";    /*like this*/
// // console.log(myDog.bark);





// // nested array OBJECT

// /*var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "sunflower",
//             "lotus"
//         ]
//     },
//     {
//         type: "plants",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
//  var secondTree =(myPlants[1].list[4]);
//   console.log(secondTree);

// OR

//  var chooseFlowers =(myPlants[0].list[2]);
//   console.log(chooseFlowers);        */






// // var myArr = [];
// // for (var i = 1; i <10; i += 2) {
// //     myArr.push(i);

// // }
// // console.log(myArr);


// // var myArr=[4,5,7,8];
// // var myTotal=0;
// // for(var i=0; i<4;i++){
// //     myTotal +=myArr[0];

// // }
// // console.log( myTotal);


// /*falsy values in javascript: 0, "", undefined,null, NaN,false** is false anyways*/


// // if(score=0){
// //     console.log("we loss the game");
// // }else{
// //     console.log("We won the game")                 /*if we set the falsy value the code will jump directly to the else part*/
// // }


// // if(score=4){
// //     console.log("we loss the game");
// // }else{
// //     console.log("We won the game")
// // }

// /*-----------------------------------------------------------------------------------------------------------------------------------------*/


// //  /*conditional(ternary)operator*/      SYNTAX  =>  variablename=(condition)?value1:value2

// //  var age=12;
// // if(age>=18){
// //     console.log("Can vote");
// //  } else {
// //         console.log("Can't vote");
// //     }


// // var age = 22;
// // console.log(((age >= 18) ? "Can vote" : "Can't vote"));

// /*----------------------------------------------------------------------------------------------------------------------------------------*/

// // var area = "square";
// // var PI = 3.142, l = 4, b = 2, r = 5;

// // if (area == "circle") {
// //     console.log(" The area of circle is : " + PI ** r);

// // } else if (area == "triangle ") {
// //     console.log(" The area of triangle is : " + (l * b) / 2);
// // } else if (area == "rectangle") {
// //     console.log(" The area of circle is : " + (l * b));
// // } else {
// //     console.log("please enter valid data");
// // }



// // var area = "square";
// // var PI = 3.142, l = 4, b = 2, r = 5;


// // switch (area) {
// //     case "circle":
// //         console.log(" The area of circle is : " + PI ** r);
// //         break;
// //     case "triangle":
// //         console.log(" The area of triangle is : " + (l * b) / 2);
// //         break;
// //     case "rectangle":
// //         console.log(" The area of circle is : " + (l * b));
// //         break;
// //         default:
// //             console.log("please enter valid data");


// // }


// /*----------------------------------------------------------------------------------------------------------------------------------------*/

// // var i=1;
// // //block scope         while loop:condition check first the output
// // while(i<=10){
// //     console.log(i);
// //     i++;
// // }


// // /*do-while loop*/             first output is displayed than condition checked
// // var i=1;
// // do{
// //     console.log(i);
// //     i++;
// // }while(i<=10);

// /*--------------------------------------------------------------------------------------------------------------------------------------------*/

// // for(var num=0;num<=10;num++){
// //     console.log(num);
// // }




// // for( var i=1;i<=10;i++){
// //     // console.log(` 8x  i  =  8*i `);
// //     // console.log( "8 X " + i +" = "+ 8*i)
// // console.log(`${8}* ${i} = ${ 8* i }` )             /*template literals(template strings)
// // }


// /*-----------------------------------------------------------------------------------------------------------------------------------------*/
// //  FUNCTIONS   you can resuse code, define it once use it multiple times with different arguments to get different results.
// //  It eliminates the need of witing the same code again and again.

// //             //   (parameters)
// // function Sum(a,b){
// //     var total=a+b;
// //     console.log(total);
// // }
// // Sum();
// // Sum(4,3);    /*(Arguments)*/
// // Sum(50,50);




// // function Sum(a,b){             /*FUNCTION EXPRESSION: simply function is assigned as a variable*/
// //     var total=a+b;
// //     console.log(total);
// // }
// //  var funExp =Sum(4,4);
// //  funExp;


// /* ANONYMUS FUNCTION EXPRESSION: a function without a name is kown as anonymus function*/

// // var funExp = function (a, b) {                /*no name of function is given here thats why anonymus function*/
// //     return total = a + b;

// // }
// // console.log(funExp(5, 4));



// // var funExp = function (a, b) {                /*anonymus function expression*/
// //     return total = a + b;

// // }
// // var sum = funExp(5, 4);                       /*function expression*/
// // var sum1 = funExp(3, 5);
// // console.log(" sum of two no. is " + sum1);
// // console.log(sum > sum1);



// /*--------------------------------------------------------------------------------------------------------------------------------------------*/
// // LET VS CONST VS VAR


// // var myName="vrinda";      VAR
// // console.log(myName);

// // myName="sakshi";
// // console.log(myName);

// // =========================================================

// //  let myName="vrinda";
// // console.log(myName);       LET

// // myName="sakshi";
// // console.log(myName);

// // =========================================================

// // const myName="vrinda";
// // console.log(myName);         CONST

// // myName="sakshi";
// // console.log(myName);


// // // =============================================================


// // function biodata() {
// //     const myFirstName = "vrinda";
// //     console.log(myFirstName);


// //     if (true) {
// //         const myLastName = "maurya";
// //         console.log(' inner ' + myFirstName);
// //         console.log(' inner ' + myLastName);
// //     }

// //     console.log('innerOuter' + myLastName);

// // } biodata();




// /*var =function scope, let and const= block scope*/

// /*==================================================================================*/
// //  DEFAULT PARAMAETERS


// // function mult(a,b=4){
// //     return a*b;
// // }

// // console.log(mult(6));

// /*------------------------------------------------------------*/

// // ARRAYS


// // var myArr=[6,5,4,7,8,9,9,0,3,4,4,,5,2,2,3,4,,5,67,7,34,22,56,32,45,77,33,6,88,222,44,55,65,54,67,878,54,46,343,56,778,6868,88]
// // // console.log(myArr[7]);
// // console.log(myArr[myArr.length-1]);
// // console.log(myArr.length);



// // var myFriends=["deepak","sakshi","neharika","michelle","kartikey"];

// // for(var i=0;i<myFriends.length;i++){
// // console.log(myFriends[0]);
// // }


// // forEach loop

// // var myFriends=["deepak","sakshi","neharika","michelle","kartikey"];

// // myFriends.forEach(function(element,index,array){
// //     console.log(element+" index :"+index+ "" + array);
// // });

// /*=======================================================================*/
// // const animals = ["cow", "elephant", "chicken"];
// // animals.push("rabit");           /*add element to an array at  the end*/
// // animals.unshift("giraffe");      /*add element to an array in the beginning*/
// // animals.unshift("monkey","cat");
// // console.log(animals);
// // console.log(animals.length);

// // console.log(animals.pop());        /*removes element of an array from the end*/
// // console.log(animals);
// // console.log(animals.length);

// // console.log(animals.shift());         /*removes element of an array from start*/
// // console.log(animals);
// // console.log(animals.length);



// // const names = ["anoosha", "archana", "aarti"];
// // // const newNames= names.splice(3,0,"angad");
// // const newNames= names.splice(names.legth,0,"angad");
// // console.log(names,newNames);

// // const newAdd= names.splice(1,1,"ARCHANA");
// // console.log(names);

// // const indexOfNames = names.indexOf("archana");

// // if (indexOfnames !== -1) {
// //     const newNames = names.splice(indexOfNames, 0, "ARCHANA");
// //     console.log(names);
// // } else {
// //     console.log("no such data found");
// // }

// /*-----------------------------------------------------------------------------------------------------------------------------------------*/

// // question1:

// // var kilometers=5;
// // const factor=0.621371;
// // const miles= kilometers*factor;
// // console.log(" 5 " +" kilometers into miles is : "+ miles);

// // question 2:

// // var Celsius=20;
// // const Fahrenheit= ((Celsius*(9/5))+32);
// // console.log(Celsius + "  degree Celsius  is " + Fahrenheit  + " degree Fahrenheit ");

// // question 3:

// // var num=7;
// // if(num>0){
// //     console.log("A positive number");
// // }else if(num<0){
// //     console.log("A negative number");
// // }else{
// //     console.log("neither negative nor positive its a zero");
// // }

// // question 4:

// // var num=25;
// // if(num%2==0){
// //     console.log(" Entered number " +  num  +" is even ");
// // }else{
// //     console.log(" Entered number " + num + " is odd");
// // }

// // question 5:

// // const num1=0;
// // const num2=5;
// // const num3=1;
// // if(num1>=num2&&num1>=num3){
// //     console.log(" largest number is: "+ num1)
// // }else if(num2>=num1&&num2>=num3){
// //     console.log(" largest number is: "+ num2)
// // }else {
// //     console.log(" largest number is: "+ num3)

// // }

// // question 6:

// // const num = 3;
// // if (num < 0) {
// //     console.log(" Factorial of a negavtive number does't exist ");
// // } else if (num == 0) {
// //     console.log(" Factorial of zero is " + 1);
// // }else {
// //     var fact = 1;
// //     for (i = 1; i <= num; i++) {
// //         fact=fact*i;
// //        }
// //     console.log(" The factorial of " +num+ " is "+fact);
// // }



// // question 7:

// // function isPrime(num) {

// //     if (num === 2) {
// //       return true;
// //     } else if (num > 1) {
// //       for (var i = 2; i < num; i++) {

// //         if (num % i !== 0) {
// //           return true;
// //         } else if (num === i * i) {
// //           return false
// //         } else {
// //           return false;
// //         }
// //       }
// //     } else {
// //       return false;
// //     }

// //   }

// //   console.log(isPrime(6));


// // question 8:  fibonnaci sequence


// // var a=0;
// // var b=1;
// // console.log(a);
// // console.log(b);
// // for(var i=0;i<=8;i++){
// //   var temp=a+b;
// //   console.log(temp)
// //   a=b;
// //   b=temp;
// // }

// // question 9: to check Armstrong number

// //  var number=45;
// //   var temp=number;
// //   var sum=0;
// //  while(temp>0){
// //   var digit=temp%10;
// //   sum +=digit**3;
// //   temp=parseInt(temp/10);
// //  }
// //  if(sum==number){
// //   console.log("Number is an Armstrong number");
// //  }else{
// //   console.log("Not an Armstrong number");
// // }

// // question 10: Find armstrong number in an Interval

// // var a=1;
// // var b=1000;
// // for (var i=a;i<=b;i++){
// //     var temp=i;
// //     var noOfDigits=i.toString().length;
// //     var sum=0;
// //     while(temp>0){
// //         var digit=temp%10;
// //         temp=parseInt(temp/10);
// //         sum+=digit**noOfDigits;
// //     }
// //     if(sum==i){
// //         console.log(i)
// //     }
// // }

// // question 11: calculator


// // var a = 5;
// // var b = 4;
// // const opr = "/";
// // switch (opr) {
// //     case "+":
// //         var c=a+b;
// //         console.log("addition:" + c);
// //         break;
// //     case "-":
// // var g=a-b
// //         console.log(g);
// //         break;
// //     case "*":
// //         var i=a*b
// //         console.log(i);
// //         break;
// //     case "/":
// //         var j=a/b
// //         console.log(j);
// //         break;
// // }



// // var a = 2;                    right one
// // var b = 4;
// // const opr = '/';
// // if (opr == "+") {
// //     result = a + b;
// // } else if (opr == "-") {
// //     result = a - b;
// // } else if (opr == "*") {
// //     result = a * b;
// // } else {
// //     result = a / b;
// // }
// // console.log(result);



// // question 12:  sum of natural numbers

// // const num=2;
// // let sum=0;
// // for(i=1;i<=num;i++){
// //     sum+=i;
// // }
// // console.log(sum);

// // question 13:  last digit of three numbers are same.

// // const a =50;
// // const b = 8;
// // const c =70;
// // const result1 = a % 10;
// // const result2 = b % 10;
// // const result3 = c % 10;
// // if(result1 == result2 && result1 == result3) {
// //     console.log("have the same last digit");
// // }
// // else {
// //     console.log("have different last digit");
// // }


// // question 14:  hcf
// // let hcf;
// // var num1 = 2;
// // var num2 = 4;


// // for (let i = 1; i <= num1 && num2 <= 2; i++) {

// //     if (num1 % i == 0 && num2 % 1 == 0) {
// //         hcf = i;

// //     }
// // }

// // console.log("HCF of" + num1 + "and" + num2 + "is" + hcf);


// // question 15: factor of a Number

// // const num = 3;
// // for (i = 1; i <= num; i++) {
// //     if (num % i == 0) {
// //         console.log(i);
// //     }
// // }

// // console.log(" The factor of " + num + " is : ");


// // question 16: sum of natural number by recursion

// // function sum(num) {
// //     if (num > 0) {
// //         return num + sum(num - 1);
// //     }
// //     else {
// //         return num;
// //     }
// // }
// // var res=sum(2);

// // console.log(res);


// // question 17: Program to guess a Random Number



// // var x = Math.random();
// // console.log(" before calculation " + x);
// // x = x * (10 - 1) + 1;                          /*formula used   Math.random()*(10-1)+1,  for whole number use:Math.floor(Math.random()*(10-1))+1*/
// // console.log(" after calculation " + x)
// // console.log(" Floor calculation " + Math.floor(x));

// // qusetiom 18: Program to shuffle deck of cards

// // var suits=['hearts','clubs','diamonds','spades'];
// // var ranks=['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
// // var deck=[];
// // for(var i=0;i<4;i++){
// //     for(var j=0;j<13;j++){
// //         // console.log(suits[i]+ranks[j]);
// //         deck.push(suits[i]+ranks[j]);

// //     }

// // }
// // console.log(deck);


// /*------------------------------------------------------------*/


// // function creatDeck() {
// //     var suits = ['hearts', 'clubs', 'diamonds', 'spades'];
// //     var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// //     var deck = [];
// //     for (var i = 0; i < 4; i++) {
// //         for (var j = 0; j < 13; j++) {
// //             // console.log(suits[i]+ranks[j]);
// //             deck.push(suits[i] + ranks[j]);

// //         }

// //     }
// //     return deck;
// // }

// // function shuffleDeck(deck) {
// //     for (var i = 0; i < 52; i++) {
// //         var temp = deck[i];
// //         var randomIndex = Math.floor(Math.random() * 52);
// //         deck[i] = deck[randomIndex];
// //         deck[randomIndex] = temp;
// //     }
// // }
// // var testDeck = creatDeck();
// // shuffleDeck(testDeck);
// // console.log(testDeck);

// // question 18: decimal to Binary (simple)



// // const number = parseInt(34.5);

// // const result = number.toString(2);

// // console.log('Binary:' + 'of ' + result);


// Ques:Progamm to print current date  dd/mm/yyyy

// var today= new Date();
// var dd=today.getDate();
// var mm=today.getMonth();
// var yyyy=today.getFullYear();
// if(dd<10){
//     dd='0'+dd;
// }
// if(mm<10){
//     mm='0'+mm;
// }
// today=dd+'-'+mm+'-'+yyyy;
// console.log(today);


// // "SPREAD OPERATOR"

// // arr = [1, 3, 4, 1, 3]

// // function avg(a,b,c){
// //     return a+b+c/3;
// // }
// // let a=avg(...arr);
// // console.log(a);


// // let b=[4,5,7,8]
// // console.log(b);

// // let b=[4,5,7,...arr,8]
// // console.log(b);

// // let c=[...arr]                                        /*copy of an array*/
// // console.log(c)


// // var obj1 = {
// //     name: 'vrinda',
// //     age: 25,
// //     favIceCream :'vanilla'
// // }
// // console.log(obj1);
// //  var obj2={}
// // obj2.name=obj1.name
// // obj2.age=obj1.age
// // obj2.favIceCream='chocolate'
// // console.log(obj2)


// // SPREAD OPERATOR
// //  let obj2={...obj1,favIceCream:'chocolate'}
// //  console.log(obj2)

// Ques:check whether the number is positive or negavtive

var a=0;
function positive_num(a){
 return a;
}positive_num(1);
if(a>0) {
    console.log("The number is positive");
       }
       else if(a==0){
        console.log("The number is neither  negative nor positive");
       }else{
console.log("The number is negative");
// }

  OR

var num=0;
if(num>0){
    console.log("the numnber is positive")
}else if(num==0){
    console.log("the number is neither positive nor negative");
}else{
    console.log("the number is negative");
}


// Ques:print the greatest number of the three numbers

var num1=0;
var num2=1;
var num3=10;
if(num1>num2&&num1>num3){
    console.log(" The greatest number is :"+num1);
}else if(num2>num1&&num2>num3){
    console.log(" The greatest number is :"+ num2);
}else{
    console.log(" The greatest number is : "+num3);
}

// Ques:Program for factorial

var num=-1;
if(num<0){
    console.log("The factorial does not exist")
}else if(num==0){
    console.log("The factorial of zero is 1")
}else{
    var fact=1;
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log("The factorial of "+num+ " is "+fact)
}



// Ques:sum of n natural numbers
var num=188;
let sum=0;
for(i=0;i<=num;i++){
    sum=sum+i;
}
console.log(sum)


// Ques:swaping of Number

var a=5;
var b=1;
var temp = 
temp=a;
a=b;
b=temp;
console.log(a,b)


// Ques: swapping of three numbers
 
var a=9;
var b=6;                   
var c=1;
var temp=
temp=a;
a=b;
b=c;
c=temp;
console.log(a,b,c)


// Ques:km into mile

var km=3;
var miles=km*0.621371;
console.log(km+ " km "+"="+miles+" miles ");


// Ques:check whether odd or even

 const num=1
 if(num%2==0){
    console.log("The number is even");
 }else{
    console.log("The number is odd")
 }

// Ques:programm to reverse a String



 var str="vrinda";
function reverseString(str){
   var newString = "";
   for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i];
}
return newString; 
}
console.log(reverseString('vrinda'));
