//JS adds Functionality to our websites
//Dynamic Effects and Interactivity
// alert('Hello World Lets Take it Day By Day!!')

// let js = 'amazing' //defined JS as being Amazing

// if( js === 'amazing') alert('Javascript is FUN')
//if js is ===(strict equality) 'amazing' then alert 
//say 'Javascript is FUN.'
//TRUE

// js = 'boring'
// if( js === 'amazing') alert('Javascript is FUN')
//FALSE

// let num = (40+8+23-10) 
// console.log(num);

//constructor 

function Dog(dogName, dogBreed, dogWeight, dogAge) {
    this.name = dogName,
    this.breed = dogBreed,
    this.weight = dogWeight,
    this.age = dogAge
}

var puppy = new Dog('Doggy' , 'Pug' , 10 , 3)
console.log(puppy);

const puppy2 = new Dog('Apollo' , 'bostonTerrier' , 20 , 6)
console.log(puppy2);