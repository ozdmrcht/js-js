//objects

var customer = {
       firstName : 'john',
       lastName : 'Smith',
       cars: ["Volvo", "Toyota", "Tesla"]


}
//THIS CALLED DOT Notation
customer.firstName="Mike"
// This called Backet Notation
customer['lastName']='Silver'
console.log(customer)
console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[1]="BMW"
console.log(car[1])
console.log(customer.cars[0])