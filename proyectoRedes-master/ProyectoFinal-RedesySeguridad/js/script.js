$(document).ready(function () {
    $('h1').click(function () {
        $('h1').css('background-color', '#ff0000');
    });

    $('.btn-inbox').click(function () {
        ShowSec1();
        $('html, body').animate({
            scrollTop: $('.section-correo').offset().top
        }, 1000);
    });

    $('.btn-sent').click(function () {
        ShowSec2();
        $('html, body').animate({
            scrollTop: $('.section-correo2').offset().top
        }, 1000);
    });
document.getElementById("sec1").style.display = "none";
    document.getElementById("sec2").style.display = "none";

});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    $('html, body').animate({
        scrollTop: $('.sticky').offset().top
    }, 500);
}

function ShowSec1() {
    document.getElementById("sec1").style.display = "block";
    document.getElementById("sec2").style.display = "none";

}

function ShowSec2() {
    document.getElementById("sec2").style.display = "block";
    document.getElementById("sec1").style.display = "none";
}