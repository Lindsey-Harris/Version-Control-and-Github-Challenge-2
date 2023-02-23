// // function nameIt (param1, param2) {
// //     //code I want to run
// //     // we're looking at the function decloration
// //     //return something e.g. value/object

// // }
// //Basic Function

// //example #1

// function sum (a, b) {
//     let number = a+b
//     console.log('inside console.log', number);
//     return (number);
// }
// //callback
// sum(5, 10); //calling the function
// console.log('Hey!', sum(5,10));

// //example #2
// function sum (a, b) {
//     return a+b;
// }

// console.log('Hey', sum(5, 10));


// function sum (a, b) {
//     return a+b;
// }

// console.log(sum(5, 10));

// let bigSumOfMoney = console.log (sum(1000000000000, 25000000000000000));


// //Anonoymous Function: (function w/o a name)

// // function() {
// //     console.log('Hey Joseph! Are you yawning?')
// // }

// const greet = function () {
//     console.log('Hey Joseph, Thanks for being so attentive today');
        
// }

// greet();

// (function(){
//     console.log('We are making an IIFE')
// })();  //An IIFE (Immediately Invoked Function 
// //Expression) "()" is a JavaScript function that runs 
// //as soon as it is defined.

// //callback fuction example

// setTimeout(function() {
//     console.log('Times Up');
// }, 30000);

// //basic format of a function
// // first argument
// // function() {
// //     console.log('Times Up');
// // }
// //second argument
// // 3000

// setTimeout(function() {
//     console.log('Times Up');
// }, 3000);


// const num = 100;
// //Arrow Functions
// ()=>{
//     if(num > 1) {
//         console.log('num is greater than one!');
//     } 
//     return 100
//     //Return statement is required for multiple lines of code.
// }

// ()=>{console.log(100 + 100)}
// //if its a one line statement, you don't have 
// //to use the return for ()=>

// function(){
//     100 + 100 // cannot get value w/o saying return
// } //for ()=>

// //Basic Function
// function(){
//     console.log('Times Up');
// }

// setTimeout(function() {
//     console.log('Times Up');
// }, 3000);

//example of an Arrow Function w/ a 1 line return
setTimeout(()=>{console.log('Times Up Again')}, 3000);