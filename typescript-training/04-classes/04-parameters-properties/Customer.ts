class Customer {

    // Parameter properties
    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

// Creating an instance:
let myCustomer = new Customer('John', 'Doe');

console.log(`The customer is ${myCustomer.firstName} ${myCustomer.lastName}`);