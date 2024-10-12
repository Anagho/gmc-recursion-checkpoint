// recursive function to generate the nth Fibonacci sequence:
const fibonacciSequence = (num, sequence = []) => {
  // Input validation
  if (typeof num !== "number" || num < 0) {
    return "Please enter a non-negative integer.";
  }

  //  Base case: if n is 0, return an empty sequence
  if (n === 0) return [];

  // Base case: if n is 1, return the sequence with only the first Fibonacci number
  if (n === 1) return [0];

  // Recursive case: build the sequence
  if (sequence.length < n) {
    // If we need to fill more terms
    if (sequence.length === 0) {
      sequence.push(0); // 0th Fibonacci number
    } else if (sequence.length === 1) {
      sequence.push(1); // 1st Fibonacci number
    } else {
      // Calculate the next Fibonacci number and push to the sequence
      const nextNumber =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
    // Recursively call to build the sequence
    return fibonacciSequence(num, sequence);
  }

  return sequence; // Return the generated Fibonacci sequence
}

// Example usage
let n = 7; 
const sequence = fibonacciSequence(n)
console.log(
  `Fibonacci sequence up to the ${n}th term: ${sequence}`
);
console.log(`The ${n}th Fibonacci number is ${sequence[n - 1]}`);