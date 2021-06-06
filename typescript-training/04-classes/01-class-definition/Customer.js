var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
// Creating an instance:
var myCustomer = new Customer('John', 'Doe');
console.log("The customer is " + myCustomer.firstName + " " + myCustomer.lastName);
