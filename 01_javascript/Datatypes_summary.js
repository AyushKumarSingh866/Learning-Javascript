const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 65448895477405556554n 

// Array,object,function
 const heros = ["Ironman", "Thor" , "Spiderman"];

 let myObj = {

    name: "Ayush",
    age: 22,

 }

 const myFunction = function(){
   console.log("Hello World");
}
console.log(typeof myFunction);


// ......................Memory and its types


let myEmail = "Ayushkumarsingh@gmail.com"

let anotherName = myEmail
anotherName = "AyushSingh"

console.log(anotherName);
console.log(myEmail);

let userOne = {
email: "user@yahoo.com",
upi: "9431592830@paytm",


}

let userTwo = userOne

userTwo.email = "ayush@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);