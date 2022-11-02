// Add function
// Minus function
// divide function
// times function
// equals
// decimal
// reset/cancel
// Need to store the numbers after hitting an operator

function useCalculator() {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");

  let first = 0;
  let second = 0;
  let operator = 0;
  let result = 0;

  buttons.forEach((el) => {
    el.addEventListener("click", () => {
      display.innerHTML += el.innerHTML;

      // check if operator pressed
      if (el.dataset.key === "operator" && operator === 0) {
        first = display.innerHTML.slice(0, -1);
        operator = el.innerHTML;
        display.innerHTML = "";
      } else if (operator !== 0 && el.dataset.key === "operator") {
        second = display.innerHTML.slice(0, -1);
        result = calculate(first, second, operator);
        operator = el.innerHTML;
        first = result;
        display.innerHTML = "";
      }

      console.log("first:" + first);
      console.log("second:" + second);
      console.log("result:" + result);

      //equals

      if (el.dataset.key === "equals") {
        second = display.innerHTML.slice(0, -1);
        // equals is pressed before anything else
        if ((first === 0 && second === 0 && result === 0) || result === NaN) {
          display.innerHTML = "0";
          return;
        }

        result = calculate(first, second, operator);
        display.innerHTML = result;
        operator = 0;
      }

      // reset
      if (el.innerHTML === "CA") {
        cancel(display);
        first = 0;
        second = 0;
        result = 0;
      }
    });
  });
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return minus(a, b);
  } else if (operator === "÷") {
    return divide(a, b);
  } else {
    return times(a, b);
  }
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function minus(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function times(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function cancel(display) {
  display.innerHTML = "";
}

useCalculator();
