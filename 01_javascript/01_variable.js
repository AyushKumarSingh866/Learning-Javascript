const accountId=144559
let accountEmail="ayushjack44@gmail.com"
var accountPassword="12345"
accountCity="Ranchi"

// accountId=2 // not allowed
accountEmail= "hc@AbortController.com"
accountPassword= "455654"
accountCity="Bhubaneshwar"
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope*/ 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

