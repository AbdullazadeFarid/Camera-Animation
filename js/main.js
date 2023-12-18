



var click = document.querySelector(".click");

var flash = document.querySelector(".flash");

var audio = new Audio("./cameravoice.wav");

click.addEventListener("click", function () {

    flash.style.background = "white";


    audio.play();

    setTimeout(function () {
        flash.style.background = "rgb(69, 69, 69)";
    }, 500);
});

