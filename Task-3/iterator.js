/*
When working with arrays or maps, iterating over their values is straightforward,
because these data structures are built-in iterables—they come with a default iteration behavior.

However, when you're dealing with plain objects, it's a bit different.
Objects are not iterable by default. This is where the Iterable Protocol comes into play.

What is the Iterable Protocol in JavaScript?
    The Iterable Protocol allows JavaScript objects to define or customize their iteration behavior—specifically,
    how they behave when used in constructs like for...of or ...spread dots.

To be iterable, an object must implement the [Symbol.iterator]() method, which returns an iterator object. Here is code examples:

// Array iteration
*/ 
const arr = [1, 2, 3];

for(const n of arr) {
    console.log(n) //logs one array element respectivly
}

// Normal object iteration 
const obj = {
    values: [1, 2, 3]
}

for(const val of obj) {
    console.log(val) //❌ Error: userScores is not iterable
}

// Using iterable protocol
const iterableObj = {
  values: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    const values = this.values;

    return {
      next() {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for(const val of iterableObj) {
    console.log(val); // This will logs all the valuse inside the object respectivly.
}
console.log([...iterableObj]) // this will logs an array of the values of the object;

/*
use cases: 
    - Make the object iterable
    - Custom Iteration with for...of
    - Using Spread Syntax (...) 
*/