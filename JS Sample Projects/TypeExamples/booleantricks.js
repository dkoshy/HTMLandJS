
//Or operator trick
let userName='';
//or operator returns first truthy value
let loggedInUser = userName || 'Deepak Koshy';
console.log(loggedInUser);
loggedInUser = userName || null || "Deepak Koshy";
console.log(loggedInUser);
//or operator returns last value if both are falsy values
loggedInUser = userName || undefined
console.log(loggedInUser);

// And operator trick

let IsLoggedIn = true;
//and operator retuns the second value if first one is true
console.log(IsLoggedIn && 'User is logged in');

IsLoggedIn = false;
console.log((IsLoggedIn && 'User is logged in') || 'User is not Logged in');
IsLoggedIn = true;
console.log((IsLoggedIn && 'User is logged in') || 'User is not Logged in');

//Memory leak Eaxmple
const eventAddBtn = document.getElementById('addeventbtn');
const clickEventbtn = document.getElementById('addclickbtn');

function onaddevent(){
    // clickEventbtn.addEventListener('click', onMessage);
    clickEventbtn.addEventListener('click', function(){
        console.log('you clicked');
    }); //clear example of  memory leakage
}

function onMessage(){
    console.log('you clicked');
}

eventAddBtn.addEventListener('click',onaddevent );


