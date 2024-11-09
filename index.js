const blinkedBox = document.getElementById('box');

blinkedBox.addEventListener('click', onBoxClick);

let num = 0;

function onBoxClick() {
    numberChange();
    makeSound();
    colorChange();
    changeCursor();
}

function numberChange() {
    blinkedBox.innerHTML = num + 1;
    if (num >= 15) {
        return num = 1;
      } else {
        return num++;
      }
    
}

function makeSound() {
    var audio = new Audio("sound/tom-4.mp3");
    audio.play();
}

function colorChange() {
    if (num <= 4) {
        blinkedBox.style.background = "#15e51c";
    } else if (num >= 10) {
        blinkedBox.style.background = "#f60000";
    } else {
        blinkedBox.style.background = "blue";
    }
} 

function changeCursor() {
    blinkedBox.style.cursor = "pointer";
}