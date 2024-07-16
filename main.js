window.onload = function () {
    var footer_text = document.getElementById("copyright");
    footer_text.textContent = "\u00A9 2020-" + new Date().getFullYear() + " DevDoctor";
    if(localStorage.getItem('stars')) {
        stars();
    }
};

function setStars() {
    if(localStorage.getItem('stars')) {
        resetStars();
    } else {
        localStorage.setItem('stars', true);
        stars();
    }
}

function resetStars() {
    localStorage.removeItem('stars');
    document.getElementsByTagName("body")[0].style = "background-color: var(--bg-dark-color);";
}

// the sound played when the GLaDOS is clicked
function play() {
    var audio = document.getElementById("glados_audio");
    audio.play();
}

function setDir() {
    var dir = document.getElementById("directory");
    var pagetitle = document.getElementById("page-title");
    dir.textContent = pagetitle.textContent;
    document.title = pagetitle.textContent + " - Doc's site";
}

function stars() {
    document.getElementsByTagName("body")[0].style = "background-image: url('/images/stars.gif');";
    var audio = document.getElementById("stars_audio");
    audio.play();
}