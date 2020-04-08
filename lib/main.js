'use strict';

$(document).ready(function () {

    $('.sliding-page').slick({
        dots: true,
        arrows: true,
        prevArrow: '.main-slider-pagenation .button-prev',
        nextArrow: '.main-slider-pagenation .button-next',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function () {

    $('.autoplay').each(function () {
        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            nextArrow: '<a href="#" class="button-next"><i class="fas fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="button-prev"><i class="fas fa-chevron-left"></i></a>'

        });
    });
});

$(document).ready(function () {

    $('.testi-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
});

$(document).ready(function () {

    $('.blog-slide').slick({
        slidesToShow: 3,

        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: '<a href="#" class="button-next"><i class="fas fa-chevron-right"></i></a>',
        prevArrow: '<a href="#" class="button-prev"><i class="fas fa-chevron-left"></i></a>'
    });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

window.onscroll = function () {
    myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " is-active";
}

var mybtn = document.getElementsByClassName("tablinks")[0];
mybtn.click();