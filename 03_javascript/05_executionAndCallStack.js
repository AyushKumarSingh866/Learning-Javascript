// let val1 = 10
// let val2 = 5
// function addNum(num1, num2) {
//     let total = num1 + num2
//     return
    
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// ====Global Execution Context => MEmory creation phase => Execution Phase

function one() {
    console.log("one");
    two()
}

function two() {
    console.log("two");
    three()
}
function three() {
    console.log("three");
    
}

one()
two()
three()
