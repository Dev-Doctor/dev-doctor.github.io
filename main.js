window.onload = function() {
    var footer_text = document.getElementById("copyright");
    footer_text.textContent = "\u00A9 2020-" + new Date().getFullYear() + " DevDoctor";
};

// the sound played when the GLaDOS is clicked
function play() {
    var audio = document.getElementById("glados_audio");
    audio.play();
}