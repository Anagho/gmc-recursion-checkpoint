// Program to determine ticket price based on age
const getTicketPrice = (age) => {
    age = Number(age); // Convert age to a number

    // Check for valid age
    if (Number.isNaN(age) || age <= 0) return "Invalid age";

    // Proceed to determine ticket price
    switch (true) {
        case (age <= 12):
            return "$10";
        case (age >= 13 && age <= 17 ):
            return "$15";
        case (age >= 18 ):
            return "$20";
        default:
            return "Invalid age";
    }
};

// Prompt the user to enter their age
const age = prompt("Enter your age: ");

// Get and display the ticket price
const price = getTicketPrice(age);
alert(`The price of the ticket is ${price}.`);