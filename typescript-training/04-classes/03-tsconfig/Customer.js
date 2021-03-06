"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Creating an instance:
var myCustomer = new Customer('John', 'Doe');
console.log("The customer is " + myCustomer.firstName + " " + myCustomer.lastName);
