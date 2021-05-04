//Task -1 

let numbers = [10,11,20,25,67,30,1,3,87,100,25];

let numbersGfive = numbers.filter(n => n > 5);
console.log(numbersGfive);
let numbersToObjects = numbers.map(n => ({number:n }));
console.log(numbersToObjects);
let productOfObject = numbersToObjects
                        .map(o => o.number)
                        .reduce((p,c) => p * c,1);
console.log(productOfObject);

//task 2 and 3

const findMax = (...n)=>{
    let mnM = [];
    mnM.push(n.reduce((p,c) => p < c ?  p  : c , n[0]));
    mnM.push(n.reduce((p,c) => p > c ?  p  : c , 0));
    return mnM;
};


let [minNumber , maxNumber ] = findMax(...numbers);

console.log(`Smallest Number Is :  ${minNumber}
 Largest Number Is :  ${maxNumber}`);

 //task 4

 let nonDuplicateList = new Set([1,4,6,7,5,3,2,4,5,6]);

 nonDuplicateList.add(20);
 nonDuplicateList.add(7);

 console.log(nonDuplicateList);