const user = {
    username: "Ayush",
    price: 999, 

    welcomeMessage: function () {
        console.log(`${this.username} ,Welcome to the website.`);
        // console.log(this);

        
    }
}

//  user.welcomeMessage()
//  user.username = "Sam"
//  user.welcomeMessage()

// console.log(this);

// function start() {
//     let username = "Ayush"
//     console.log(this.username);
    
// }

// start()

// const chai = function () {
//     let username = "Ayush"
//     console.log(this.username);
// }
// const chai =  () => {
//     let username = "Ayush"
//     console.log(this);
// }

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2

// }

// const addTwo = (num1 , num2) => ( num1 + num2)
const addTwo = (num1 , num2) => ({username: "Ayush"})


console.log(addTwo(3, 4));

// const myArray = [3, 4, 8, 9, 10]
// myArray.forEach( () => {});


