/*
Generator: is an object returned from generator function and it is an iterator object that conforms to the Iterable Protocol.,
This function is a special type of functions that can be paused or resume during it is execution.
It uses yield: keyword to produce a sequence of iterable values.
you can consume the values one after one by using [generator.next()]
or ypou can iterate on them by for-of or ...spread dots.
let's code it:
*/ 

const generator = function* charsGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
}

const dotsIteration = [...generator] // => ['a', 'b', 'c', 'd'];

for(const char of generator) {
    console.log(char); // 1-'a', 2-'b',...etc
}

console.log(generator.next()); // { value: 'a', done: false }
console.log(generator.next()); // { value: 'b', done: false }
console.log(generator.next()); // { value: 'c', done: false }
console.log(generator.next()); // { value: 'd', done: false }
console.log(generator.next()); // { value: undefined, done: true }

/*
use cases in real development:
- creats iterable object in easier way
- Generate the values only on needed [by .next()]
- Add to any built-ins that acepts iterables: Promise.all, Set...etc 
*/