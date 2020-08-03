//console.log("this works");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let result = document.querySelector(".counter");
let input = document.querySelector(".input");

input.value = 1;

document.addEventListener("DOMContentLoaded", function(){
//when + is pressed take value from input and add it to result score
function add() {
    let currentNum = Number(result.textContent);
    let inputNum = Number(input.value);
    currentNum += inputNum;
    result.textContent = currentNum;
    if (currentNum < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}
plus.addEventListener("click",add);

function subtract() {
    let currentNum = Number(result.textContent);
    let inputNum = Number(input.value);
    currentNum -= inputNum;
    result.textContent = currentNum;
    if (currentNum < 0) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}
minus.addEventListener("click",subtract);

});
