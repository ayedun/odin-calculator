let input1 = 10;
let input2 = 5;
let operation = "add";
let result = operate(input1, input2);

console.log("hi");

function operate(input1, input2) {
  if (operation == "add") {
    let result = input1 + input2;
    return result;
  }
  if (operation == "minus") {
    let result = input1 - input2;
    return result;
  }
  if (operation == "multiply") {
    let result = input1 * input2;
    return result;
  }
  if (operation == "divide") {
    let result = input1 / input2;
    return result;
  }
}

console.log(result);
