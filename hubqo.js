var audio = null;
/*Hecho por AnderSuar 95*/
function playSound() {
    if (audio != null) audio.pause();
    audio = new Audio("https://hubqo.github.io/Rep.-de-audio-en-html5/audio.mp3");
    audio.play();
}/*Hecho por AnderSuar 95*/
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("play").addEventListener("click", playSound);
});/*Hecho por AnderSuar 95*/