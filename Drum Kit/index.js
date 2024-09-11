var length = document.querySelectorAll(".drum").length;

var audio = new Audio('sounds/tom-1.mp3');
audio.play();

//Detect click

for (var i = 0; i < length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonPress = this.innerHTML; 

        makeSound(buttonPress);

        buttonAnimation(buttonPress);
        
    });
}

// Detect key press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

//make sound based on key
function makeSound(key) {

    switch(key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "a":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "s":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;

        default: console.log(this)

    }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); 

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 300)

}