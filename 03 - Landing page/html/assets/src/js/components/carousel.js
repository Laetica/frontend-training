var initCarousel = function(context) {
    var carousel = $(context);

    if (!carousel.length) { //check if element exists
        return false;
    }

    $(context).slick({ // init slick carousel plugin
        dots: true,
        autoplay: true,
        arrows: false,
        fade: true
    });
}

initCarousel('.js-slick-slider');