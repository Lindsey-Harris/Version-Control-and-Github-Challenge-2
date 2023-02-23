const prompt = request('promt-sync')({ sigint: true});
let hello = prompt('Tell me your first name');

console.log(hello);


const fs = require( 'fs' ); //npm install file-system --save MAYBE
//no need to install npm install fs because it is already built into the node.js
//installation . Only need to import the fs module by using the 'require' function.
//Do not need to create the file b/c it already exists.


// install npm i movie-quotes to get the JSON file MAYBE
//make sure to use the 'require' function 'const movieQuotes = require('movie-quotes');
//to link your files.


//could use fs.writeFile().

//fs.writeFile('quotes.txt',)
//if (err) {
    //console.log('Error')

    const movieQuotes = require('movie quotes');
    const fs = require('fs');


//using the Fs module, (file system)
//If the first doesn't exist create it
//Create a file of movie quotes that is inputted

//What should happen?
//A user is asked to give a quote
//If the file doesn't exist create it, (quote.txt)
//Once the file exists, add the quotes entered on a new line

//Bonus:
//If the quote already exists let the user know, and don't take the input.

//Triming incase their is white space, is it case sensitive(figure it out)?


//import the required modules
const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');
const lineReader = require('line-reader');

function askQuote() {
  let quote = prompt('Give me a move quote: ');

  return quote + '\n';
}

quote = askQuote();

fs.appendFile('quotes.txt', quote, function (err) {
  if (err) throw err;
  console.log('Updated!');
});


function testLineReader(str) {
  lineReader.eachLine('quotes.txt', function (line, last) {
    console.log(line);
    if (str === line) {
      console.log('naw');
    }
    // do whatever you want with line...
    if (last) {
      // or check if it's the last one
    }
  });
}
//call this inside the ask quote function
testLineReader('fdsf');