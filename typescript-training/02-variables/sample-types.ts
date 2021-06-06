let male: boolean = true;
let age: number = 30;
let grade: number = 97.80;
let firstName: string = 'Alan';
let lastName: string = 'Ensina';
let gender: string = male ? 'Male' : 'Female';

console.log('Full name: ' + firstName + ' ' + lastName);
console.log('Age: ' + age);
console.log('Gender: ' + gender );
console.log('Final grade: ' + grade);

// Use template strings:
console.log(`Hello ${firstName} ${lastName}, welcome to TypeScript!`);