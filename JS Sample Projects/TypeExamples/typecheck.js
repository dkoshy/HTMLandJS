

//which line output Error 

console.log(a); 
// console.log(b); //Raise error

let b = 'Error will be thrown '; //has block scope can't be accessed using windowo bject
var a = 'I have global scope';

console.log("Global scaope of b : "+ window.b);
console.log("local scaope of b : "+ b);
console.log('Scope of a : ' + window.a);

//diference between undefined and is not declared
//type of undeclared variable is 'undefined'

console.log(typeof a);
console.log(typeof c); 

//Best way to check undeclared variables
if(typeof c === 'undefined')
{
    console.log('Variable c is not defined');
}

//There is no reference error if you try to access a 
//non existing property 
//of an object
var num = 23;   //Has global scpe 
if(!window.num)  //typeof num === 'undefined' will throw error if use 'let'
{
    console.log('Variable num is not defined');
}



//best way to check null
let d = null;

if(!d && typeof d === 'object')
{
    console.log('d is initialiised as null');
}

//definign arrays
//An array can hold mixed vaues
var numarray = [];
numarray[0] = 10;
numarray[1] = 12;
numarray[3]="Deepak Koshy"
numarray["13"] = 14;
numarray["category"] = "even numbers";

console.log(`Array lenghth is ${numarray.length}`);
console.log(`3rd element of the Array ${numarray[3]}`);
console.log(typeof numarray);
console.log(numarray.category);

//Array like objects are there 
//  eg : DOM elements and aruguments of a funnction

function func()
{
    let arr = Array.from(arguments); 
    let anotherarr = Array.prototype.slice.call(arguments);
    arr.push("koshy")
    console.log(arr);
    console.log(anotherarr);
}

func(1,3);

//Differance between array and strings
//string is an array of charecters 

let astring='foo';
let bstring = ['f','o','o'];

console.log(astring);
console.log(bstring);
console.log(astring.split('').reverse().join('')); //Simple way to revers a string
console.log(astring === bstring);

// litteral representing valid numbers

let num1 = 20.300,
    num2 = .30,
    num3 = 20.;
console.log(num1,num2,num3);

//equality check for floting point numbers;
num1 =  0.2 + 0.3;
console.log(num1 === 0.5, num1 ,
     0.1 + 0.2 === 0.3,
     0.1 + 0.3 === 0.4);
//how to check for close equality

function numbersCloseEnoughToEqual(n1,n2) {
    return Math.abs( n1 - n2 ) < Number.EPSILON;
}

console.log(numbersCloseEnoughToEqual(0.1 + 0.2 , 0.3));
console.log(numbersCloseEnoughToEqual(0.1 + 0.3 , 0.4));
console.log(numbersCloseEnoughToEqual(0.1 , 0.2));

// string representation of a number.
//toFixed - controls only decimal positions. 
//toPrecision -  controls number of digits in a number.

console.log((42.305).toFixed(2), (42).toFixed(1), (42.31).toFixed(3));

console.log(42..toPrecision(1), 42.3.toPrecision(4));   
console.log(`one thousand :  ${1E3}`)

/*
For checking the validity of Numbers
Number.isInteger, 
Number.isSafeInteger, 
Number.isNaN
*/

/* 
Special values
infinity
-infinity
0 and -0
*/

console.log(-0, 2/0 , 3/-0 , 0 === -0 ,
     Infinity === -Infinity);
