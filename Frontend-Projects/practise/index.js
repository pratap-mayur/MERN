function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Take input from user
  let num = parseInt(prompt("Enter a number:"));
  if (!isNaN(num)) {
    console.log ( factorial(num));
  } else {
    alert("Please enter a valid number!");
  }
  