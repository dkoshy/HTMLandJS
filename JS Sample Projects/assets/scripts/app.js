const defaultResult = 0;

let logEntries = [],
    currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
 }

function displayResult(prevResult, inuptNumber,operator,operation) {
  let calculationExpression = `${prevResult} ${operator} ${inuptNumber}`;
  outputResult(currentResult, calculationExpression);
  let logEntry = {
      operation: operation,
      prevResult: prevResult,
      inputValue : inuptNumber,
      currentResult : currentResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function prefromArithmeticOp(operation,opSymbol)
{
  let inuptNumber = getUserInput();
  let prevResult = currentResult;

  if(Number.isNaN(inuptNumber) || 
    !inuptNumber){
    return;
  }

  if(operation == 'Addition')
  {
    currentResult += inuptNumber;
  }
  else if(operation == 'Subtractionition')
  {
    currentResult -= inuptNumber;
  }
  else if(operation == 'Multiplication')
  {
    currentResult *= inuptNumber;
  } 
  else if(operation == 'Division')
  {
    currentResult /= inuptNumber;
  }
  
  displayResult(prevResult, inuptNumber,opSymbol,operation);
}

function add() {
  prefromArithmeticOp('Addition','+');
}

function subtraction() {
  prefromArithmeticOp('Subtractionition','-');
}

function multiply() {
  prefromArithmeticOp('Multiplication','*');
}

function division() {
  prefromArithmeticOp('Division','/');
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click',division);
