function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
  }
  // sayMyName() 
  // // function addTwoNumbers(Number1, Number2){
    
  //  console.log(Number1 + Number2); 
   
  // }
  function addTwoNumbers(Number1, Number2){
    
  //  let result = (Number1 + Number2); 
  //  return result
  return Number1 + Number2
   
  }

const result =  addTwoNumbers(3, 8)
// console.log("Result:", result);


function loginUserMessage(username = "Ayush"){
  if(!username){
    console.log("Please enter the username");
    return
  }

    return `${username} just logged in`


}

// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
  return num1
    
}
// console.log(calculateCartPrice(200, 400,  600, 5000));

const user = {
  username: "Ayush",
  price:"1000"
}

function handleObject (anyobject) {
 console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
   username: "sam",
   price: 400


})

const myNewArr = [200 , 600, 400, 700]

function returnSecondValue(getArray) {
  return getArray[1]
  
}
console.log(returnSecondValue(myNewArr));