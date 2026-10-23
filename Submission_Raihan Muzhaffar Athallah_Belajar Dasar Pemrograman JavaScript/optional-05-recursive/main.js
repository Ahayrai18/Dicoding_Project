import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

// Factorial demo
const numberForFactorial = 5;
console.log(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`);

// Fibonacci demo
const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
for (let i = 0; i <= numberForFibonacci; i++) {
  console.log(fibonacci(i));
}
