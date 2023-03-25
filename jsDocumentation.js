// how to use JSDoc to document a function that takes three arguments and returns a sentence:
/**
 * 
 */
// - business analysis
/**
 * Generates a sentence based on the name, origin, and course.
 *
 * @param {string} name - The name of the person.
 * @param {string} origin - The country of origin of the person.
 * @param {string} course - The name of the course.
 * @returns {string} - A sentence that includes the name, origin, and course.
 */

function generateSentence(name, origin, course) {
  return `${name} from ${origin} is taking the course ${course}.`;
}

/*
    Documenting object properties and methods:
    In this example, we're using JSDoc to document an object type Person. 
    We're defining its properties using @property tags, and we're also 
    documenting a method greet using @method, @memberof, and @instance tags.
    This makes it easy for other developers to understand the structure of 
    the Person object and how to use its methods.
*/

/**
 * Represents a person.
 *
 * @typedef {Object} Person
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 *
 * @method greet
 * @memberof Person
 * @instance
 * @param {string} message - The greeting message.
 * @returns {string} - The greeting message.
 */

const person = {
  name: "John",
  age: 30,
  greet(message) {
    return `${message}, ${this.name}!`;
  },
};

/*
    Documenting callbacks
    In this example, we're using JSDoc to document a function performAsyncOperation
    that takes a callback as a parameter. We're using @param tags to document the 
    parameters of the callback function, including their data type and what they represent. 
    This makes it easy for other developers to understand how to use the performAsyncOperation 
    function and how to handle its callback.
 */

/**
 * Performs an asynchronous operation.
 *
 * @param {function} callback - The callback function to call when the operation is complete.
 * @param {Error} callback.error - The error object if the operation failed.
 * @param {any} callback.result - The result of the operation if it succeeded.
 */
function performAsyncOperation(callback) {
  // Perform the async operation...
  const error = null;
  const result = "Operation succeeded";
  callback(error, result);
}

/*  
Documenting complex types:
In this example, we're using JSDoc to document a complex data structure consisting of two 
object types Student and Course. We're using @typedef tags to define these types, and we're 
also defining the properties of each type using @property tags. This makes it easy for other 
developers to understand the structure of the student object and the Course object, and how 
they relate to each other.


*/
/**
 * Represents a student.
 *
 * @typedef {Object} Student
 * @property {string} name - The name of the student.
 * @property {string} email - The email address of the student.
 * @property {Course[]} courses - The courses the student is enrolled in.
 */

/**
 * Represents a course.
 *
 * @typedef {Object} Course
 * @property {string} name - The name of the course.
 * @property {number} credits - The number of credits for the course.
 */

const student = {
  name: "Joseph",
  email: "joseph@example.com",
  courses: [
    {
      name: "JavaScript Basics",
      credits: 3,
    },
    {
      name: "Node.js Fundamentals",
      credits: 4,
    },
  ],
};

/*
In conclusion, JSDoc is a powerful tool for documenting your JavaScript code. By using JSDoc 
to document your code, you can make it easier for other developers to understand how to use 
your code, and to maintain it over time.
 */
