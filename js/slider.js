$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slider-btn slider-prev"><img src="./images/arrow-prev.svg" alt="" /></button>',
        nextArrow: '<button class="slider-btn slider-next"><img src="./images/arrow-next.svg" alt="" /></button>',
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 771,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
        ],
    })
});