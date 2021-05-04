/* Natives in javascript
JavaScript provides object wrappers around primitive values,
 known as natives.
String(),
Number(),
Boolean(),
Array(),
Object(),
Function(),
RegExp(),
Date(),
Error(),
Symbol()—added in ES6! 
These object wrappers serve a very important purpose.
Primitive values don’t have properties or methods, 
so to access .length or .toString()
you need an object wrapper around the value.
Thankfully, JS will automatically
box (aka wrap) the primitive value to fulfill 
such accesses.
In other words, never do things like 
new String("abc"), new Number(42), 
etc.—always prefer using the 
literal primitive values "abc" and 42
*/

//Natives as constructors 
//An array with at least one “empty slot” in it is 
//often called a “sparse array.”
var a = new Array(3); //this creates an array with 3 empty slots
var c = [];
c.length = 3;
console.log(a,c);

/*Bottom line: never ever, 
under any circumstances, should you intentionally
 create and use these exotic empty-slot arrays. 
Just don’t do it. They’re nuts.*/


/*Prototype

Each of the built-in native constructors has its own 
.prototype object — Array.prototype, String.prototype, etc.
These objects contain behavior unique to their particular object subtype.
*/
