



var click = document.querySelector(".click");

var flash = document.querySelector(".flash");

var audio = new Audio("./cameravoice.wav");

click.addEventListener("click", function () {

    flash.style.background = "white";   // flash yandiqda ay reng elave olunacag


    audio.play();

    setTimeout(function () {
        flash.style.background = "rgb(69, 69, 69)"; // 5 milli saniye sora o elave olunan flash legv olunub boz renge geri donecek
    }, 500);
});

