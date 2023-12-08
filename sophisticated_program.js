/* 
   Filename: sophisticated_program.js
   Content: A sophisticated and elaborate JavaScript program demonstrating various concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Class representing an employee, extending Person
class Employee extends Person {
  constructor(firstName, lastName, age, companyName) {
    super(firstName, lastName, age);
    this.companyName = companyName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}, Employee at ${this.companyName}`;
  }

  introduce() {
    console.log(`Hello, I'm ${this.getFullName()}!`);
  }
}

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to find the maximum number in an array
function findMaxNumber(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = [];
  for (let word of words) {
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizedWords.join(" ");
}

// Event Listener for button click
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Fibonacci sequence generator using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage of classes and functions
const john = new Person("John", "Doe", 25);
console.log(john.getFullName()); // Output: John Doe
console.log(john.isAdult()); // Output: true

const alice = new Employee("Alice", "Smith", 30, "ACME Corporation");
console.log(alice.getFullName()); // Output: Alice Smith, Employee at ACME Corporation
alice.introduce(); // Output: Hello, I'm Alice Smith, Employee at ACME Corporation!

console.log(addNumbers(5, 10)); // Output: 15

const numbers = [2, 10, 5, 8, 1];
console.log(findMaxNumber(numbers)); // Output: 10

const sentence = "hello world";
console.log(capitalizeWords(sentence)); // Output: Hello World

console.log(fibonacci(6)); // Output: 8