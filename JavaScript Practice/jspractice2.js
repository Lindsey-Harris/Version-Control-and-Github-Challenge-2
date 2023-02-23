//Object

// function superhero (superheroName , superheroPower , superheroAbility) {
    
//     this.name = superheroName,
//     this.power = superheroPower,
//     this.ability = superheroAbility
// }

// var strong = new superhero ('Hulk' , 'Strong' , 'Smash');

// console.log(strong)


// Create a function that takes an array of numbers and returns a new array with 
//both the minimum and maximum numbers, in that order.
// Examples of output 

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

//create an algorithm that will seek out the largest and smallest number in the
//array w/o using math.max etc
 
// var arr = [ 8, 10, 17, 5, 25, 52, 89, 20, 11];

// var max = arr[0];
// for(i = 0; i < arr.length; i++) {
//     if(arr[i] >= max) {
//         max = arr[i];
//     }
// }
// console.log(max); // = 89


// var min = arr[0];
// for(i = 0; i < arr.length; i++) {
//     if(arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min); // = 5






//create an algorithm that will seek out the largest 
// and smallest number in an array 

// var arr = [2, 6, 9, 22, 28, 40, 90, 75, 64]

// sort from smallest to greatest
// function minMax (array) {
    // array.sort((a,b) => a - b);
    //declare variable for min
//  let minNumber = array[0]   
 //declare variable for max
 //array.length-1 is the length of indexes
 //in the array -1 = length of the array
//  let maxNumber = array[array.length-1]
 //use temp literal to return min number in array
 //and max number in array as a new array
//  return `${minNumber},${maxNumber}`;   
// }
//  console.log(minMax(arr));
// //call the function ^

//grab the smallest number

//grab the largest number

// var arr = [2, 6, 9, 22, 28, 40, 90, 75, 64]

// var min = arr[0];
// var max = arr[0];

// for(i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
//     if(arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);
// console.log(max);


// var min = arr[0];

// for(i = 0; i )


//Write a JavaScript function that takes in an array of Numbers and returns its median.

//  const arr = [13, 45, 65, 11, 10, 9]

//The median is the middle value in a set of data. First, organize and order the data 
//from smallest to largest. To find the midpoint value, divide the number of observations by two. 
//If there are an odd number of observations, round that number up, and the value in that position is the median.

//reverse the following :
// myArray = [21, 26, 3, 9, -4]

// function revArray(arr) {
//     return arr.reverse();
// }
// console.log(revArray(myArray));


//calculate the sum of an array

// var numbers = [ 3, 7, 10, 20];

// function addUpTo(arr) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
 
//    } return sum;
// } 
// console.log(addUpTo(numbers));

let string = "Hello World"
let vowels = ["a", 'e', 'i', 'o', 'u']
function findVowels(str){
    let count = 0;
    for(letter of string) {
        if(vowels.includes(letter)) {
            count++
        }
    } return count
}
console.log(findVowels(string));