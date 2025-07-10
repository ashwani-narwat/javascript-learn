const accountId = 1326 //const declares a constat which we cannot modify.
let accountEmail="ash@micro.com" // let declares variable which can be modified.
var accountPassword ="2613"// declares variable but not used generally.
accountCity="Jaipur" // another way to declare var but not a good practice .
let accountState;// variable declaration without value and when called , it prints "undefined" in its value.

console.log(accountId) // used to print sinle value on the screen
console.table([accountId,accountEmail,accountPassword,accountState]) // used to print multiple values in tabular format.
