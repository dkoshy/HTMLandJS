const task3Element = document.getElementById('task-3');

function alerBox(){
    alert('This is a function Example');
}

function alertName(name){
    alert(name);
};

function JoinMessages(one,two,three){
    return one + two + three;
}

alertName('Deepak Koshy');

alert(JoinMessages('My ', 'Name is ' , 'Deepak Koshy'));

task3Element.addEventListener('click',alerBox);