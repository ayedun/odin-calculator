let input1 = null;
let input2 = null;
let operation = "";
let currentNumber;
// let result = operate(input1, input2);
let result = 0;
let equalButton = document.querySelector("#equal");
let numberButtons = document.querySelectorAll(".number");
let preinput1 = "";
let preinput2 = "";

console.log("hi");

function printOperate() {
  input2 = parseInt(preinput2);
  preinput1 = "";
  preinput2 = "";
  result = operate();
  console.log(result);
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
  }
}

function inputNum(e) {
  if (input1 == null) {
    preinput1 += e.target.innerText;
    // preinput1 = `${currentinputNum.}`
    console.log("Hi input 1 doesent exist yet");
    console.log(preinput1);
  } else {
    preinput2 += e.target.innerText;
    // preinput1 = `${currentinputNum.}`
    console.log(preinput2);

    console.log("input 1 does exist");
  }
}
equalButton.addEventListener("click", printOperate);

console.log(equalButton);
