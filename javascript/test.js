// var a = 5;
// var b = 4;
// const opr = "/";
// switch (opr) {
//     case "+":
//         var c=a+b;
//         console.log("addition:" + c);
//         break;
//     case "-":
// var g=a-b
//         console.log(g);
//         break;
//     case "*":
//         var i=a*b
//         console.log(i);
//         break;
//     case "/":
//         var j=a/b
//         console.log(j);
//         break;
// }
// program to convert decimal to binary

// take input
// const number = parseInt(34.5);

// // convert to binary
// const result = number.toString(2);

// console.log('Binary:' + ' ' + result);



// var newArr=[];
// const num = 1000000000;
// for (i = 1; i <= num/2; i++) {
//     if (num % i == 0) {
//         newArr.push(i);
//         // console.log(newArr);
//     }
// }
// newArr.push(num);
// console.log(" The factor of " + num + " is : "+newArr);


// var suits=['hearts','clubs','diamonds','spades'];
// var ranks=['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
// var deck=[];
// for(var i=0;i<suits.length;i++){
//     for(var j=0;j<ranks.length;j++){
//         // console.log(suits[i]+ranks[j]);
//         deck.push(suits[i]+ranks[j]);

//     }

// }
// console.log(deck);

// console.log(deck.length);




// const n=10;
// console.log((n*(n+1))/2)
// // let sum=0;
// // for(i=1;i<=num;i++){
// //     sum+=i;
// // }
// // console.log(sum);


var myName=["parveen","vicky","rasmi","shakti"];
function printName(name){
    console.log(` my name is : ${name}`);

}
//  printName("parveen");

// for(i=0;i<myName.length;i++){
//     printName(myName[i]);
// }


var bioData = [{

    name: 'deepak',
    age: 28,                         /*JSON Array*/
},
{
    name: 'vrinda',
    age: 25
}];
// console.log(bioData[1].age+bioData[1].name);
        //  OR
// console.log(bioData[1].name);


for(i=0;i<bioData.length;i++){
    console.log(bioData[i].name+bioData[i].age)
}

// console.log(bioData.length);

var kopalBioData={
    name: 'kopal',
    age: 26
}
bioData.push(kopalBioData);


// console.log(Object.keys(kopalBioData));
// console.log(Object.keys(kopalBioData).length);


