function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

//task-1 

const sayHelloarraow = 
name => console.log('Hi ' + name);

sayHelloarraow('Deepak');

//task-2

const sayHelloTwo = (greet,name) =>
  console.log(`sayHelloTwo - ${greet}  ${name} `);

const sayHelloThree = ()=> console.log('sayHelloThree - Hi Deepak');

const sayHelloFour = (greet,name) =>
  `sayHelloFour - ${greet} ${name}`;

sayHelloTwo('hi','Deepak');
sayHelloThree();
console.log(sayHelloFour('hello','Deepak'));
//task -3

const sayHelloFive = (greet='Hi',name) =>
`sayHelloFive -  ${greet} ${name}`;

console.log(sayHelloFive(undefined,'Deepak'));
//task - 4

const aCallback = function(message){
   console.log(`${message}`);
}

const checkInput = (InvalidInput,...data)=>{
  if(data.length === 0)
  {
    InvalidInput();
  }
  for(let item of data){
    console.log(item);
  }
};

checkInput(aCallback.bind(this,'Please Pass Data'));