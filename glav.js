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

        const newValue = currentValue === '0' ? String(number) : currentValue + String(number);
        result.value = newValue;
      }

    function calculateAction(operator) {
      const result = document.getElementById('result');
      
      if (!isOperatorClicked) {
        currentResult = parseFloat(result.value);
        isOperatorClicked = true;
      } else {
        const number = parseFloat(result.value);

        switch (currentOperator) {
        case '√':
            currentResult = Math.sqrt(number);
            break;
        case '+/-':
            currentResult *= -1;
            break;
        case '%':
            currentResult = (currentResult / 100) * number;
            break;
        case '+':
            currentResult = currentResult + number;
            break;
        case '-':
            currentResult -= number;
            break;
        case '*':
            currentResult *= number;
            break;
        case '/':
            if(number === 0) {
                alert('На ноль делить нельзя!');
                result.value = '0';
            }
            else{
                currentResult /= number;
            break; 
            }
        }
      }

      if (operator === '=') {
        result.value = currentResult;
        currentOperator = '';
        isOperatorClicked = false;
      } else {
        result.value = '0';
        currentOperator = operator;
      }
    }

document.addEventListener('DOMContentLoaded', function() {
});
