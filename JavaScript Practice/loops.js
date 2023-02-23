//loops is a programming tool used to repeat a set of 
//instructions

// console.log(`Lifting weights repetition 1 `);
// console.log(`Lifting weights repetition 2 `);
// console.log(`Lifting weights repetition 3 `);
// console.log(`Lifting weights repetition 4 `);
// console.log(`Lifting weights repetition 5 `);
// console.log(`Lifting weights repetition 6 `);
// console.log(`Lifting weights repetition 7 `);
// console.log(`Lifting weights repetition 8 `);
// console.log(`Lifting weights repetition 9 `);
// console.log(`Lifting weights repetition 10 `);
 

//for loop has a counter
// w/o the ++ the counter would stay at 1 and not go up 
//to 10

// for(let rep = 1; rep <= 10; rep++) {
    // write the code that you want to be repeated
//   console.log(`Lifting weights repetition ${rep}`);

// }

//loop through arrays

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael' , 'Peter' , 'Steven'],
//     'strong',
//     'smash'
// ];

// starting the counter @ 0 bc an array is
// 0 based and 'Jonas' is the first element
//in the array 

//condition is after let i = 0
//how long do we want to keep this loop running?
//should run when i is 0; it should also run
//when its 1,2,3 and 4 bc 4 is the last element
//in the array 

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
// };

//this is how we loop arrays using a for loop


// WhiteBoard
// be comfy w/ a function, an array , a for loop

// BMI example

// know array methods: .sort, .pop, .push, .reverse, .filter, .indexof
// .unshift, .filter, .shift

//comparison operators ( < or > or <= or >=), %(remainder)

// make sure to remember to return if the question asks!!

//manipulating strings***

// pulling objects and/or add objects

// create a class 

//What is JS?

//below is an example of a loop

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//    ages.push(2037 - years[i]);
// }
// console.log(ages);
// !==(not) ||(or) &&(and)
// continue and break 
//continue is to exit the current iteration of the loop and continue 
// to the next loop
//break is to completly terminate the entire loop

// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas [i] !== 'string') continue; //if typeof is not a
//     //string then print continue

//     console.log(jonas[i], typeof jonas[i]);
// }

// //break example
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break; 

//     console.log(jonas[i], typeof jonas[i]);
// }

//loop over an array backwards:

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael' , 'Peter' , 'Steven'],
];

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

// create a loop inside another loop

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);
    
    for(let rep = 1; rep < 6; rep++ ) {
        console.log(`Lifting weights repition ${rep}`);
    }
}

//while loop
//while loop can only specify a condition

for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while(rep <= 10) { 
    console.log(`Lifting weights repetition ${rep}`);  //want the loop to run while rep is <= 10
    rep++;
}
