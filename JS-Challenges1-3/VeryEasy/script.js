// Write a function named min that takes two arguments and returns their minimum.

function min(age1, age2) { //math function (object)
// return Math.min(age1, age2);

//if age1 is less than age2 return age1
if (age1 < age2) {
    return age1;
    //otherwise
 } else {
    return age2;
 }
}

console.log(min(10, 30));
// 10
console.log(min(-30, 85));
// -30
console.log(min(2, 10));
//math.min returns the minimum of the 2 numbers
