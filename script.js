const display = document.getElementById("calc-display");

let operand1 = null;
let operator = null;
let operand2 = null;
let result = null;

const clearCalculator = () => {
	operand1 = null;
	operator = null;
	operand2 = null;
	result = null;
	display.value = "0";
};

const handleNumberClick = (e) => {
	const value = e.target.value;
	if (operator === null) {
		operand1 = operand1 === null ? value : operand1 + value;
		display.value = operand1;
	} else {
		operand2 = operand2 === null ? value : operand2 + value;
		display.value = operand2;
	}
};

const handleOperatorClick = (e) => {
	if (operand1 !== null && operand2 !== null) {
		calculateResult();
	}
	operator = e.target.value;
};

const handleDecimalClick = (e) => {
	const value = e.target.value;
	if (operator === null) {
		operand1 = operand1 === null ? "0." : operand1.includes(".") ? operand1 : operand1 + value;
		display.value = operand1;
	} else {
		operand2 = operand2 === null ? "0." : operand2.includes(".") ? operand2 : operand2 + value;
		display.value = operand2;
	}
};

const handleEqualsClick = () => {
	if (operand1 !== null && operator !== null && operand2 !== null) {
		calculateResult();
	}
};

const calculateResult = () => {
	const num1 = parseFloat(operand1);
	const num2 = parseFloat(operand2);
	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 / num2;
			break;
	}
	display.value = result;
	operand1 = result.toString();
	operator = null;
	operand2 = null;
};

const addEventListeners = () => {
	document.querySelectorAll(".btn-number").forEach(button => {
		button.addEventListener("click", handleNumberClick);
	});

	document.querySelectorAll(".btn-operator").forEach(button => {
		button.addEventListener("click", handleOperatorClick);
	});

	document.querySelector(".btn-decimal").addEventListener("click", handleDecimalClick);

	document.querySelector(".btn-equals").addEventListener("click", handleEqualsClick);

	document.querySelector("#clear-button").addEventListener("click", clearCalculator);
};

addEventListeners();