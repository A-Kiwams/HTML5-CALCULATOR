// Functionality Logic

// declare variable box to hold numbers
let box = document.getElementById('display');

// create  a function to display no on text box upon clicking on a button
function addtoscreen(x){
    box.value +=;
    if (x == 'c')
    {
        box.value = '';
    }
}

// create a function to display answer
function answer(){
    x = box.value;
    x = eval(x);
    box.value = x;
}

// function for backspace
function backspace(){
    let number = box.value;
    let len = number.length-1;
    let newnumber = number.substring(0, len);
    box.value = newnumber;
}

// function for power
function power(y){
    x = box.value;
    x = Math.pow(x, y);
    box.value = x;
}
