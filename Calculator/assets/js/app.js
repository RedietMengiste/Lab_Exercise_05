function subtraction(numberOne, numberTwo) {
  var result = 0;
  numberOne = parseInt(document.getElementById("val1").value);
  numberTwo = parseInt(document.getElementById("val2").value);
  result = numberOne - numberTwo;
  document.getElementById("subresult").innerHTML = "result: " + result;
}

function division(num1, num2) {
  var result = 0;
  num1 = parseFloat(document.getElementById("valOne").value);
  num2 = parseFloat(document.getElementById("valTwo").value);
  if (num2 == 0)
    console.log("denominator should be greater than 0!,please try again!");
  else {
    result = num1 / num2;
  }
  document.getElementById("divresult").innerHTML = "result: " + result;
}

function squareRoot(number) {
  var result;
  number = parseInt(document.getElementById("valOneSq").value);
  if (number <= 0) {
    document.getElementById("sqrtresult").innerHTML =
      "A number should be greater than 0!,please try again!";
  } else {
    result = Math.sqrt(number);
    document.getElementById("sqrtresult").innerHTML = "result: " + result;
  }
}

function addition() {
  var additionArray = new Array();
  var values;
  var result = 0;
  values = document.getElementById("valueAdd").value;
  // console.log(values);
  additionArray = values.split(",");
  for (var i = 0; i < additionArray.length; i++) {
    result += parseInt(additionArray[i]);
  }
  document.getElementById("addresult").innerHTML = "result: " + result;
}

function multiplication() {
  var multiplicationArray = new Array();
  var values;
  var result = 1;
  values = document.getElementById("valueMul").value;
  // console.log(values);
  multiplicationArray = values.split(",");
  for (var i = 0; i < multiplicationArray.length; i++) {
    result *= parseInt(multiplicationArray[i]);
  }
  document.getElementById("mulresult").innerHTML = "result: " + result;
}

function average() {
  var averageArray = new Array();
  var values;
  var result = 0;
  values = document.getElementById("valave").value;
  // console.log(values);
  averageArray = values.split(",");
  for (var i = 0; i < averageArray.length; i++) {
    result += parseInt(averageArray[i]);
  }
  document.getElementById("averesult").innerHTML =
    "result: " + result / averageArray.length;
}

function minimum() {
  var minimumArray = new Array();
  var values;
  var result = 0;
  values = document.getElementById("valmin").value;
  // console.log(values);
  minimumArray = values.split(",");
  var result = Math.min.apply(Math, minimumArray);
  document.getElementById("minresult").innerHTML = "result: " + result;
}

function maximum() {
  var maximumArray = new Array();
  var values;
  var result = 0;
  values = document.getElementById("valmax").value;
  // console.log(values);
  maximumArray = values.split(",");
  maximumArray = values.split(",");
  var result = Math.max.apply(Math, maximumArray);
  document.getElementById("maxresult").innerHTML = "result: " + result;
}
