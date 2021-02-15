var upperExpression = document.getElementById("upper-expression");
var lowerExpression = document.getElementById("lower-expression");

var reset = 0;

function clearAll() {
  upperExpression.innerHTML = "";
  lowerExpression.innerHTML = "";
}

function clearLower() {
  console.log("qwerqwerq");
  lowerExpression.innerHTML = "";
}

function backspace() {
  lowerExpression.innerHTML = lowerExpression.innerHTML.slice(0, -1);
}

function solve() {
  if (upperExpression.innerHTML == "") {
    return;
  }
  upperExpression.innerHTML = upperExpression.innerHTML + lowerExpression.innerHTML;
  lowerExpression.innerHTML = eval(upperExpression.innerHTML);
  reset = 1;
}

function addLower(number) {
  if (reset == 1) {
    lowerExpression.innerHTML = number;
    upperExpression.innerHTML = "";
    reset = 0;
  } else {
    lowerExpression.innerHTML = lowerExpression.innerHTML + number;
  }
}

function addUpper(expression) {
  if (reset == 1) {
    reset = 0;
  }
  if (upperExpression.innerHTML == "") {
    upperExpression.innerHTML = lowerExpression.innerHTML + expression;
  } else {
    console.log(upperExpression.innerHTML.slice(-1));
    if (upperExpression.innerHTML.slice(-1) == " ") {
      upperExpression.innerHTML = upperExpression.innerHTML.slice(0, -2) + expression;
    } else {
      upperExpression.innerHTML = upperExpression.innerHTML + expression;
    }
  }
  lowerExpression.innerHTML = "";
}
