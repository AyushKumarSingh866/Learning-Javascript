const name = "Ayush"
const repoCount = 2

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("ayush-singh")

// console.log(gameName[3]);
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase());
  // console.log(gameName.charAt(2));
    // console.log(gameName.indexOf("y"));

   const newstring = gameName.substring(0, 4)
//    console.log(newstring);


   const anotherString = gameName.slice(0, 4)
//    console.log(anotherString);


   const newStringOne = "   Singh   "
//    console.log(newStringOne);
//    console.log(newStringOne.trim());

   const url = "https://ayush.com/ayush%20singh"

   console.log(url.replace('%20', '-'))
   console.log(url.includes('kumar'))

   console.log(gameName.split('-'))