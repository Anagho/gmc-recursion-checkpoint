// Recursive function to get the nth Fibonacci number
const fibonacci = (n) => {
  // Input validation
  if (typeof n !== "number" || n < 0) {
    return "Please enter a non-negative integer.";
  }

  // Base cases
  if (n === 0) return 0; // 0th Fibonacci number
  if (n === 1) return 1; // 1st Fibonacci number

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Example usage
let n = 10; 
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
