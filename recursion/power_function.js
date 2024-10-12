// Recursive function to calculate x raised to the power of n
const power = (x, n) => {
    // Base case: if n is 0, any number raised to the power of 0 is 1
    if (n === 0) {
        return 1;
    }

    // If n is negative, convert it to posive by calculating the reciprocal
    if (n < 0) {
        return 1 / power(x, -n);
    }

    // Recursive case: multiply x by the result of x raised to (n - 1)
    return x * power(x, n - 1);
};

// Example usage
console.log(power(-2, 2));  // Output: 4 (-2^2 = 4)
console.log(power(-2, 3));  // Output: -8 (-2^3 = -8)
console.log(power(5, 0));   // Output: 1 (5^0 = 1)
console.log(power(2, -2));  // Output: 0.25 (2^-2 = 1 / 2^2)