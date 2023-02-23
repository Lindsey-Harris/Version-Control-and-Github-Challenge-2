//Create a program that accepts a number (1-12) as input and logs to the console 
//that number and its corresponding month. For example: if the user enters the 
//number 3, then it should return the month “March.” Alert the user if they enter an 
//invalid number (e.g. less than 1 or greater than 12).

let userInput = prompt('Enter a month between 1-12');

let months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

if (userInput <= 12 || userInput <= 0) {
    console.log(months[userInput-1]);
} else {
    alert('You have entered an invalid reponse, please enter a number between 0-12');
}