// arrays

const myArr = [0, 1, 2, 6, 8, true, "Ayush"]
const myHeroes = ["ironman", "superman"]
const myArr2 = new Array(2, 6, 8, 10)
console.log(myArr2[3])

// Arrays

 myArr.push(7)
 myArr.push(8)
 myArr.pop()
 myArr.unshift(9)
 myArr.shift()

 console.log(myArr.includes(9));
 console.log(myArr.indexOf(1));
 const newArr = myArr.join()
 console.log(typeof newArr);
 console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A", myArr);


const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);

console.log("C", myArr);