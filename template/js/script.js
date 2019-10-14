//sliders

$(document).ready(function() {
    $('.top-slider__inner').slick({
        prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"><span class="vh">next</span></button>',
        autoplay: true
    });
    $('.hotel-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="hotel-slider__btn hotel-slider__btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="hotel-slider__btn hotel-slider__btn--next"><span class="vh">next</span></button>'
    })
})