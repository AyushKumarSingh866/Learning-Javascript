// singleton

// object literals

const mySym = Symbol("Key1")

  const JsUser = {
    name: "Ayush",
    "full name" : "Ayush Kumar Singh",
    [mySym] : "mykey1",
    age:21,
    location: "Ranchi",
    email: "ayush@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday", "Tuesday"]
  }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "singh@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "singh@facebook.com"
console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");

}
JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

