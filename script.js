// SET A SCREEN VARIABLE (Set Variables to Represent Buttons)
const screen = document.querySelector('#screen')
// The variable 'numbers' is the array of everything in my html page with the class name "number".
const numbers = document.querySelectorAll('.number')

// This is the step to getting the text on the screen with the first function.
function inputChange (event){
    const elemTarg = event.target;
    const buttonText = elemTarg.innerText;
    screen.innerText += buttonText;
}

// This is the second step to getting the second function.
function addAllEventListeners (array){
    for (let i=0; i < array.length; i++){
        array[i].addEventListener('click', inputChange)
    }
}

addAllEventListeners(numbers);

// CLEAR / delete BUTTON FUNCTION (the AC button)
const allClear = document.querySelector('.clear')

function clearButton (){
    screen.innerText = " "
}
allClear.addEventListener('click', clearButton)


