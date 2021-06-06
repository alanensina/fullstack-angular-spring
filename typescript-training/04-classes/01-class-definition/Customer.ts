class Customer{
    firstName: string;
    lastName: string;

    constructor(theFirstName: string, theLastName:string){
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}

// Creating an instance:
let myCustomer = new Customer('John', 'Doe');

console.log(`The customer is ${myCustomer.firstName} ${myCustomer.lastName}`);