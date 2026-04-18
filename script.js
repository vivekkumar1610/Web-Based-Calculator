// Get textarea (display)
const answerArea = document.getElementById("answerarea");

// Append values to display
function myAppend(value) {
    answerArea.value += value;
}

// Clear display
function clearAnswer() {
    answerArea.value = "";
}

// Calculate result
function calculate() {
    try {
        let expression = answerArea.value;

        // Replace ^ with ** for exponentiation
        expression = expression.replace(/\^/g, "**");

        // Evaluate expression
        let result = eval(expression);

        // Show result
        answerArea.value = result;
    } catch (error) {
        answerArea.value = "Error";
    }
}