//Logical "AND"

console.log(true && true) // all values have to be true or expression to be TRUE


// Logical "OR"
console.log(false || false) // any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibiltyForDriverLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibiltyForDriverLicense)

//Logical "NOT"
//onsole.log(!true)
console.log(6 !== 10)