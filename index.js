var length = document.querySelectorAll(".drum").length;

var audio = new Audio('sounds/tom-1.mp3');


for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", audio.play);
}






function handleClick() {
    alert("I got clicked!");
}