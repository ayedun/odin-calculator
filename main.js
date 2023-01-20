let input1 = null;
let input2 = null;
let operation = "";
let currentOperation = "first input";
// let result = operate(input1, input2);
let result = 0;
let equalButton = document.querySelector("#equal");
let numberButtons = document.querySelectorAll(".number");
let botDisplay = document.querySelector("#bot-display");
let topDisplay = document.querySelector("#top-display");
let operationSign = "";

let addsign = " + ";
let minussign = " - ";
let multiplysign = " x ";
let dividesign = " / ";

let preinput1 = "";
let preinput2 = "";

console.log("hi");

function printOperate() {
  currentOperation = "print result";
  input2 = parseInt(preinput2);
  result = operate();
  console.log(result);
  topDisplay.innerHTML = `${input1}${operationSign}${input2}`;
  botDisplay.innerHTML = result;
  preinput1 = result + "";
  preinput2 = "";
  input1 = null;
  input2 = null;
  currentOperation = "first input";
}

function operate() {
  if (operation == "add") {
    let result = input1 + input2;
    // console.log(result);
    return result;
  }
  if (operation == "minus") {
    let result = input1 - input2;
    // console.log(result);
    return result;
  }
  if (operation == "multiply") {
    let result = input1 * input2;
    // console.log(result);
    return result;
  }
  if (operation == "divide") {
    let result = input1 / input2;
    // console.log(result);
    return result;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", inputNum);
});

function changeSign(sign) {
  if (preinput1) {
    input1 = parseInt(preinput1);
    console.log(`input1 is ${input1} `);

    operation = sign;
    if (operation == "add") {
      operationSign = addsign;
    }
    if (operation == "minus") {
      operationSign = minussign;
    }
    if (operation == "multiply") {
      operationSign = multiplysign;
    }
    if (operation == "divide") {
      operationSign = dividesign;
    }

    topDisplay.innerHTML = `${preinput1}${operationSign}`;
  }
}

function inputNum(e) {
  if (input1 == null) {
    preinput1 += e.target.innerText;
    // preinput1 = `${currentinputNum.}`
    console.log("Hi input 1 doesent exist yet");
    botDisplay.innerHTML = preinput1;
    console.log(preinput1);
  } else {
    currentOperation = "second input";

    preinput2 += e.target.innerText;

    // preinput1 = `${currentinputNum.}`
    botDisplay.innerHTML = preinput2;
    console.log(preinput2);

    console.log("input 1 does exist");
  }
}
equalButton.addEventListener("click", printOperate);

function reset() {
  input1 = null;
  input2 = null;
  operation = "";
  result = 0;
  operationSign = "";
  preinput1 = "";
  preinput2 = "";
  topDisplay.innerHTML = "";
  botDisplay.innerHTML = "";
}

function backspace() {
  if (currentOperation == "first input") {
    preinput1 = preinput1.slice(0, -1);
    botDisplay.innerHTML = preinput1;
  }
  if (currentOperation == "second input") {
    preinput2 = preinput2.slice(0, -1);
    botDisplay.innerHTML = preinput2;
  }
}
console.log(equalButton);
