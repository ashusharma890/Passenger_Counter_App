
let count =0;
let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");

function increment () {
    count++;
    countEL.textContent = count;
}

function reset () {
    count=0;
    countEL.innerText = count;
    saveEL.textContent = "Previous Entries: ";
}

function save() {
    let countStr =+ count + " - ";
    saveEL.textContent += countStr;
    count=0;
    countEL.textContent=count;
}

// let number1= document.getElementById("num1");
// let number2 =document.getElementById("num2");

// function addition(){
//     let res= parseInt(number1.value)+parseInt(number2.value);
//     let ans = document.getElementById("ans");
//     ans.innerText = res;
//     console.log(number1);
// }

// let hands = ["rock", "paper" , "scissor"];

// function getHand(){
//     let randomIndex = Math.floor(Math.random() * 3);
//     return hands[randomIndex];
// }

// console.log(getHand());