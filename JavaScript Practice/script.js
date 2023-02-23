//You will be given an array of computers, with each brand being an object with 
//two properties: brand and price. Create a function that has the computers array 
//as an argument and return the computers objects sorted by price in ascending order.
//Assume that the following array of computer objects needs to be sorted:

// Mac, Acer, lenovo and dell are the Objects
// "Brand" and "price" is the Properties

computers = [
    {brand: "mac", price: 1800},
    {brand: "acer", price: 300},
    {brand: "lenovo", price: 1700},
    {brand: "dell", price: 1000}
];
  
//The sort() method sorts the elements of an array in place and 
//returns the reference to the same array, now sorted.
//The sort order is ascending

let sortByComputerPrice = computers.sort(
   function comparePrice(p1, p2) {
    if (p1.price > p2.price) {
        return 1;
    } else if (p1.price < p2.price) {
        return -1;
    } else {
        return 0;
    }
  }
);
 
console.log(computers);