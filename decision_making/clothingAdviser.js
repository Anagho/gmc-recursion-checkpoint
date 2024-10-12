// Program that advise a user on what clothing to wear based on the current temperature and if it's raining.
class ClothingAdviser {
  // constructor
  constructor(temperature, isRaining) {
    this.temperature = Number(temperature); // convert to number
    this.isRaining = isRaining.toLowerCase() === "yes";
    this.advice = "";
    this.temperatureAdvice = {
      cold: "It's cold outside, so wear a heavy coat and warm boots.",
      chilly: "It's a bit chilly, so put on a sweater and jeans.",
      mild: "The weather is mild, making a t-shirt and shorts perfect.",
      hot: "It's hot out, so choose light clothing to stay cool.",
    };
  }

  // Method to validate temperature input
  validateTemperature() {
    return !Number.isNaN(this.temperature);
  }

  // Method to determine clothing advice based on temperature
  determineAdvice() {
    if (this.temperature < 10) {
      this.advice = this.temperatureAdvice.cold;
    } else if (this.temperature >= 10 && this.temperature < 20) {
      this.advice = this.temperatureAdvice.chilly;
    } else if (this.temperature >= 20 && this.temperature < 30) {
      this.advice = this.temperatureAdvice.mild;
    } else {
      this.advice = this.temperatureAdvice.hot;
    }

    // Append rain advice if necessary
    if (this.isRaining) {
      this.advice += " Also, don't forget your umbrella!";
    }
  }

  // Method to get the final advice
  getAdvice() {
    if (!this.validateTemperature()) {
      return "Invalid temperature, please enter a valid number.";
    }
    this.determineAdvice();
    return this.advice;
  }
}

// Example usage
const temperature = prompt("What is the current temperature?");
const isRaining = prompt("Is it raining? (yes/no)");

const clothingAdviser = new ClothingAdviser(temperature, isRaining);
alert(clothingAdviser.getAdvice());
