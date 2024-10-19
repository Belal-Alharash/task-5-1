const result = document.querySelector(".result");
const numbersButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const clearAllButton = document.querySelector(".clear-all");
const equalButton = document.querySelector(".equal");
const decimalPoint = document.querySelector('.point');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const xmark = document.querySelector('.xmark');
const divide = document.querySelector('.divide');
const percent = document.querySelector('.percent');

let TheCurrentValue = '';
let operator = '';
let ThePreviousValue = '';

function update (number){
    result.textContent = number;
};

numbersButtons.forEach (function(button) {
   button.addEventListener("click", function(){
    TheCurrentValue += button.textContent;
    update (TheCurrentValue);
   })
});

decimalPoint.addEventListener('click', function() {
    if (!TheCurrentValue.includes('.')) {
        TheCurrentValue = TheCurrentValue + ".";
        update (TheCurrentValue);
    }
});

clearAllButton.addEventListener('click', function() {
    TheCurrentValue = '';
    ThePreviousValue = '';
    operator = '';
    update('');
});

clearButton.addEventListener('click', function(){
    TheCurrentValue = TheCurrentValue.slice(0, -1);
    update (TheCurrentValue);
})

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (TheCurrentValue === '') return; 
        if (ThePreviousValue !== '') {
            TheCurrentValue = enter(ThePreviousValue, TheCurrentValue, operator); 
            update(TheCurrentValue);
        }        
        ThePreviousValue = TheCurrentValue;
        TheCurrentValue = ''; 
    });
});

plus.addEventListener('click', function(){
    operator = "+";
})


minus.addEventListener('click', function(){
    operator = "-";
})


xmark.addEventListener('click', function(){
    operator = "*";
})


divide.addEventListener('click', function(){
    operator = "/";
})


percent.addEventListener('click', function(){
    operator = "%";
})


equalButton.addEventListener('click', function() {
    if (TheCurrentValue === '' || ThePreviousValue === '') return; 
    TheCurrentValue = enter(ThePreviousValue, TheCurrentValue, operator);
    update(TheCurrentValue);
    ThePreviousValue = '';
    operator = '';
});

function enter(previous, current, operator) {
    previous = parseFloat(previous);
    current = parseFloat(current);
    switch (operator) {
        case '+':
            return previous + current;
        case '-':
            return previous - current;
        case '*':
            return previous * current;
        case '/':
            return previous / current; 
        case '%':
            return current / 100; 
        default:
            return current;
    }
}