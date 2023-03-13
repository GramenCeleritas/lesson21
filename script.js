let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

if (num1 === "" || num2 === "") {
  alert("Ups, looks like one of the feelds are empty");
} else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (num2 === 0) {
    alert("Error: Cannot divide by zero");
  } else if (num1 < num2) {
    const confirmOperation = confirm("Are you sure you want to continue the operation, the second number is bigger than first one?");
    if (confirmOperation) {
      alert(`Difference: ${num1 - num2}`);
      
    }
  } else if (num1 >= num2) {
    alert(`Sum: ${num1 + num2}\nDifference: ${num1 - num2}\nMultiplication: ${num1 * num2}\nDivision: ${num1 / num2}`);
  }
}