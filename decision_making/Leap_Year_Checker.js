// Function to check if a year is a leap year or not
const isLeapYear = (year) => {
    switch (true) {
        case (year % 4 === 0):
            return `${year} is a leap year`;
        case (year % 400 === 0):
            return `${year} is a leap year`;
        case (year % 100 === 0):
            return `${year} is not a leap year`;
        default:
            return `${year} is not a leap year`;
    }
}

console.log(isLeapYear(2024)); // 2024 is a leap year