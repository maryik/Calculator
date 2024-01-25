let currentResult = 0;
let currentOperator = '';
let isOperatorClicked = false;

function ClearInput() {
  document.getElementById('result').value = '0';
  currentResult = 0;
  currentOperator = '';
  isOperatorClicked = false;
}

function AddNumber(number) {
  const result = document.getElementById('result');
  const currentValue = result.value;

  if (currentValue === '0' || isOperatorClicked) {
    result.value = String(number);
  } else {
    result.value += String(number);
  }
  
  isOperatorClicked = false;
}

function calculateAction(operator) {
  const result = document.getElementById('result');
  const currentNumber = parseFloat(result.value);

  if (currentOperator === '+') {
    currentResult += currentNumber;
  } else if (currentOperator === '-') {
    currentResult -= currentNumber;
  } else if (currentOperator === '*') {
    currentResult *= currentNumber;
  } else if (currentOperator === '/') {
    if(currentNumber === 0){
      alert('На ноль делить нельзя!');
      currentResult = 0;
    }
    else{
      currentResult /= currentNumber;
    }
  } else if (currentOperator === '%') {
    currentResult = (currentResult / 100) * currentNumber;
  }
  else {
    currentResult = currentNumber;
  }

  if (operator === '=') {
    result.value = currentResult;
    currentOperator = '';
    isOperatorClicked = false;
  } else if (operator === '+/-') {
    currentResult = -currentResult;
    result.value = currentResult;
  } else if (operator === '√') {
    if (currentResult < 0) {
      alert("Нельзя извлечь корень из отрицательного числа!");
      result.value = 0;
    }
    else{
      currentResult = Math.sqrt(currentResult);
      result.value = currentResult;
    }
  } else {
    result.value = currentResult + operator;
    currentOperator = operator;
    isOperatorClicked = true;
  }
}