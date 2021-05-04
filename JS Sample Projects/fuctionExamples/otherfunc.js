//Arrow functions

const greet = () => {
  console.log("hi  there");
};

const message = (message) => {
  console.log(message);
};

const addNumber = (a, b) => a + b;

greet();
message("This a single parameter arraow function");
console.log(`after addition ${addNumber(10, 5)}`);

//Rest parameter  nested function and call back  Example

const displayResult = (result) => {
  console.log(`Result of Arithmetci Operation ${result}`);
};

const numberarithmentic = (showResult, operator, ...numbers) => {
  let sum = 0;

  const numberValidator = number => 
   Number.isSafeInteger(number) ? number : 0;
  

  for (let number of numbers) {
     let n = numberValidator(number);
    if (operator === '+') {
      sum += n;
    } else if (operator === '-') {
      sum -= n;
    }
  }
  showResult(sum);
};

numberarithmentic(displayResult, '+',5, 6, 7, -9, 10);
numberarithmentic(displayResult, '-', '', 5, 'a',6, 7, -9, 10, 12, 15);

//build -  to pre-configure  parameters 
//when we are not invoking functions directly

const displayWithMessage = (messageText,result) => {
  console.log(`${messageText} ${result}`);
};



numberarithmentic(displayWithMessage.bind(this, 'Result Of Addition'),
 "+", 5, 6, 7, -9, 10);
numberarithmentic(displayWithMessage.bind(this, 'Result of subtraction'),
 "-", "", 5, "a", 6, 7, -9, 10, 12, 15);

