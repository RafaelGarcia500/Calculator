let result = document.getElementById(`result`)

function addToResult(digit){
  if(result.value == `0` && result.value !== `.`){
    result.value = digit
  }
  else{
    result.value += digit
  }
}

function addOperator(operator){
    if(result.value !== ``){
        result.value += operator
    }

}

function percentage(){
    result.value = result.value/100
}
function clearInput(){
    result.value = 0
}
function deleteDigit() {
    result.value = result.value.slice(0, -1);
    if (result.value == "") {
      result.value = "0";
    }
  }
function operate(){
  let input = document.getElementById(`result`).value
  const numbers = input.split(/[+\-*/]/g)
  const operators = input.replace(/[0-9]|\./g, '').split("");
  let result = parseFloat(numbers[0]);
  
  for (let i = 0; i < operators.length; i++) {
    const num = parseFloat(numbers[i + 1]);
    if (operators[i] === "+") {
      result += num;
    } else if (operators[i] === "-") {
      result -= num;
    } else if (operators[i] === "*") {
      result *= num;
    } else if (operators[i] === "/") {
      result /= num;
    }
  }
  
  document.getElementById("result").value = result
  
}