// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create function
function checkInput() {

    // Get input value and remove whitespace
    const inputValue = userInput.value.trim();

    // Check empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    else {
        // Convert input into a number
        const number = Number(inputValue);

        // Check invalid number
        if (Number.isNaN(number)) {
            result.textContent = "Please enter a valid number!";
        }

        // Check number below 10
        else if (number < 10) {
            result.textContent = "The number is lower than 10";
        }

        // Check number above 10
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }

        // Check number equal to 10
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

// Add click event
checkBtn.addEventListener("click", checkInput);