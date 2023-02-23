// Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using a standard BMI formula:
 
// Store Tom & Jerry’s mass and height as variables.
// Calculate both their BMI’s. 
// Create a Boolean variable containing information about whether Tom has a higher BMI
// than Jerry. Print a string to the console with the variable from step 3 
//( e.g. Is Tom’s BMI higher than Jerry’s? false).

// Step 1 Starts Here
const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;
// Step 1 Ends Here

// Step 2 Starts Here
let bmi1 = (tomMass /(tomHeight * tomHeight)); { 
    console.log(bmi1);
}   //tomsBMI
let bmi2 = (jerryMass /(jerryHeight * jerryHeight)); {
    console.log(bmi2);
}  //jerrysBMI
// Step 2 Ends Here

// Step 3 Starts Here
 let jerry = bmi1;
 let tom = bmi2;

let total = (bmi1 > bmi2);
 console.log(total);
 // Step 3 Ends Here

// Step 4 Starts Here
 console.log('Is Toms BMI higher than Jerrys? ' +  total);
// Step 4 Ends Here
 
