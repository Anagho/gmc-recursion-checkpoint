// function to check if a string is a palindrome
const isPalindrome = (str) => {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Helper function to perform recursion
  const checkPalindrome = (left, right) => {
    // Base case: if the left index is greater than or equal to the right index
    if (left >= right) {
      return true; // It is a palindrome
    }

    // Compare characters at the left and right indices
    if (str[left] !== str[right]) {
      return false; // Not a palindrome
    }

    // Recursive case: check the next pair of characters
    return checkPalindrome(left + 1, right - 1);
  };

  // Start the recursion with the first and last character indices
  return checkPalindrome(0, str.length - 1);
}

// Example usage
const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "Hello, World!";
const testString3 = "No 'x' in Nixon";

console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`); // true
console.log(`"${testString2}" is a palindrome: ${isPalindrome(testString2)}`); // false
console.log(`"${testString3}" is a palindrome: ${isPalindrome(testString3)}`); // true