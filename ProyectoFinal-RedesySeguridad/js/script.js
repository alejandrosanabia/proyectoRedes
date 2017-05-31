$(document).ready(function () {
    $('h1').click(function () {
        $('h1').css('background-color', '#ff0000');
    });

    $('.btn-inbox').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-correo').offset().top
        }, 1000);
    });

    $('.btn-sent').click(function () {
        $('html, body').animate({
            scrollTop: $('.section-correo2').offset().top
        }, 1000);
    });


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

