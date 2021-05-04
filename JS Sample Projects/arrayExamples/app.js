
//Example of array like objects

let listItems = document.querySelectorAll('li');
console.log(listItems);
for(const item of Array.from(listItems)){
    console.log(item.textContent);
}
let personName ='Deekpak Koshy',
    nameArray = Array.from(personName);
console.log(nameArray);

//Array methods push and pop

let hobies = ['Cooking','Gardaning', 'Reading'];
hobies.push('swimming');
console.log(hobies);

let lastIteminArray = hobies.pop();
console.log(lastIteminArray , hobies);

//Array methods unshift and shift

let students = ['Bini','Somu','Sajen'];
students.unshift('deepak','Kumar');
const Totalstudents = students.unshift('Aisish');
console.log(Totalstudents, students);
console.log(students.shift(), students);

/* Array methods Splice 
    - Removes elements from the original array.
    - Romved  elements are retuned as another array.
    - Replace elements
*/

let numbers = [3,5,6,9,0,1];
console.log(numbers.splice(1,1));
console.log(numbers);
console.log(numbers.splice(2));
console.log(numbers);
console.log(numbers.splice(0,1,11,20), numbers);

/* Array Method slice
    - returns a new sub array from the original array
*/

let data = [5.5,6.5,7.8];
console.log(data.slice());
console.log(data.slice(0,2));
console.log(data);

/* Array method concat
    - concat array data
    - orginal array is unchanged
*/

let additionalData = data.concat(5,6,hobies);
console.log(additionalData , data);

console.log(additionalData.indexOf('Reading'));

//find and finindex
let userNames = ['Kumar','Raj','Deepak'];
let result = userNames.find((item,idx,data)=>{
    return item.toLowerCase() === 'raj';
});


console.log(result);
let searchTerm = 'deepak';
result = userNames.findIndex(item =>{
    return item.toUpperCase() === searchTerm.toUpperCase();
});

console.log(result);

//forEach 
let userData = [];
userNames.forEach((item , idx) =>{
    userData.push({name : item , rollNumber : idx + 1 });
});

console.log(userData);

//map

let userMappedData = userNames.map((item , idx) => {
    return {name : item , rollNumber : idx + 1};
});
console.log(userMappedData);

let allNmbers = [10.1,10.98,10.02,45.90,34.89,16,22,23,11,71,76,99,100,102];

let multipliedByTwo = allNmbers.map(number => {
    return number * 2;
});

console.log(multipliedByTwo);

//filter
let oddNumbers = allNmbers.filter(number => number % 2 > 0);

console.log(oddNumbers);
//  sort and reverse

console.log(oddNumbers.reverse());

let sortedNumbers = allNmbers.sort((p,c) =>{
    if(p >  c){
        return 1;  // -1
   }
   else if(p === c){
       return 0;
   }
   else{
       return -1; //1 
   }
});

console.log(sortedNumbers);

/* reduce()
    - Largest number
    - Smallest number
    - average 
*/

let largestNumber = allNmbers.reduce((p,c)=>{
    return  (p > c) ? p : c;
},allNmbers[0]);

let smallestNumber = allNmbers.reduce((p,c)=>{
    return  (p < c) ? p : c;
},allNmbers[0]);

let average = allNmbers.reduce((p,c)=> p + c ,0)
                /allNmbers.length;

console.log(`Largest Number is: ${largestNumber} ,
Smallest Number is : ${smallestNumber} ,
average is : ${average}`);

/* Spred operator ...
    - hobbies 
*/

let anotherSetOfHobbies = [...hobies];
console.log(anotherSetOfHobbies);


console.log(Math.max(...allNmbers));
console.log(Math.min(...allNmbers));
console.log(allNmbers.sort());

//Destructuring

let [firstName , LastName]= ['Max', 'Thomas' , 'Koshy'];

console.log(firstName , LastName);