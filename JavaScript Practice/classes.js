class Cookie {
    constructor(name, isGlutenFree){ //name and isGlutenFree are the properties
        this.name = name,
        this.isGlutenFree = isGlutenFree,
        this.eatCookie = function(){
            console.log("I'm eating " + this.name)
        }
    }
}
const myCookie = new Cookie();
console.log(myCookie);
const Cookie2 = new Cookie('iced oatmeal', true);
console.log(Cookie2);
console.log(Cookie2.eatCookie())
Cookie2.eatCookie()
console.log(Cookie2.isGlutenFree) //dont need parenthesis if its not a method 
console.log(Cookie2['isGlutenFree']); //need backticks inside 