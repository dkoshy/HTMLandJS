const docHeding = document.querySelector('h1'),
      inputText = document.getElementById('text-data');


console.dir(docHeding);
// docHeding.style.color = 'white';
// docHeding.style.backgroundColor = 'blue';
docHeding.textContent="This is changed";

console.log(inputText.value);
inputText.setAttribute('value', 'Bini koshy');
console.log(inputText.value);

//Some of the HTML attributes and
// DOM properties are not in sync, so it is better to use
// setAttribute and getAttribute methods in some cases

inputText.value = 'Deepak koshy';
console.log(inputText.getAttribute('value'));

//live and non live collections
//Nodelist is static - we can't change
//HtmlCollection is live - it will change 
let ulList = document.querySelector('ul');

let liveList = document.getElementsByTagName('li');
console.dir(liveList);
let nonLiveList = document.querySelectorAll('li');
console.log(nonLiveList);


let newlist = document.createElement('li');
newlist.textContent = 'newly added list';
ulList.appendChild(newlist);
console.dir(liveList);
console.log(nonLiveList);

/*

document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()

are live because they are observers of internal 
collections maintained by engines. That maintenance
is not strictly required but is easy to achieve.

document.querySelectorAll() 
is not live because result gets computed each time you request it. Maintenance of live collection is too expensive as each modification (content, attributes, classes) 
of the DOM
*/

// DOM traversing
//Trvaesing means selecting a element node and finding it's siblings

const unOrderListData = document.querySelector('ul'),
      btnToggle =  document.querySelector('#btn-toggle');
let   liItem = unOrderListData.firstElementChild;

console.dir(unOrderListData.firstElementChild);
console.dir(unOrderListData.lastElementChild);
console.dir(unOrderListData.parentElement);

let i=1;
while(liItem){
    console.log(` #${i}`);
    console.log(liItem);
    liItem = liItem.nextElementSibling;
    i++;
}

btnToggle.addEventListener('click', ()=>{
    let btnTxt = btnToggle.textContent;
    unOrderListData.classList.toggle('invisible');
    btnToggle.textContent = btnTxt ==='Show' ? 'Hide' : 'Show';
});

//Adding HTML to DOM
//innerHTML and insertAdjacentHTML

docHeding.innerHTML = '<p>Changed using InnerHTML </p>';
unOrderListData.insertAdjacentHTML('beforeend', 
'<li>fifth li </li>' );
unOrderListData.insertAdjacentHTML('afterbegin', 
'<li>unplaced </li>' );

//removing an element
//unOrderListData.remove();
//unOrderListData.parentElement.removeChild(unOrderListData);

liItem = unOrderListData.firstElementChild.nextElementSibling;
liItem.parentElement.removeChild(liItem);
liItem.remove();