//sliders

$(document).ready(function() {
    $('.top-slider__inner').slick({
        prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"><span class="vh">next</span></button>',
        autoplay: true
    });

    $('.hotel-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>'
    });

    $('.clients__feedback-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        dotsClass: 'feedback-slide__dots'
    });
    $('<div class="feedback-slide__mask"></div>').prependTo('.clients__feedback-slider');

    $('.clients__com-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>'
    })
})

//hovercard
$(document).ready(function() {
    const card = $('.card-item')

    // card.each(function() {
    //     $(this).children('.card-item__native').clone().appendTo('.card-item__append');
    // })
})

//sktabs
const skTabs = $('.sk-tabs');
if(skTabs.length) {
    ; (function (window, document, $, undefined) {
        if (!$) {
            return undefined;
        }
        $.fn.extend({
            SKtab: function (options) {
                let $th = this;
                let tabActiveClass = 'active';
                let containerActiveClass = 'active';
                let tabContainerClass = 'tab-container';
                let activeTab = 0;

                if (options.active) {
                    activeTab = options.active;
                }

                if (options.tabContainerClass) {
                    tabContainerClass = options.tabContainerClass;
                }

                if (options.tabActiveClass) {
                    tabActiveClass = options.tabActiveClass;
                }

                if (options.containerActiveClass) {
                    containerActiveClass = options.containerActiveClass;
                }

                $('.' + tabContainerClass).hide();

                let classess = '.' + this[0].classList[0];

                $(document).on('click', classess, function () {
                    if ($(this).hasClass(tabActiveClass)) {
                        return false;
                    }
                    $(classess).removeClass(tabActiveClass);
                    $(this).addClass(tabActiveClass);
                    let container = '#' + $(this).data('container');
                    $('.' + tabContainerClass).hide();
                    $(container).fadeIn().addClass(containerActiveClass);

                    return false;
                });

                $($(classess)[activeTab]).click();

            }
        });
    }(window, document, window.jQuery));

    $('.tab-item').SKtab({
        active: 0, //Какой таб будет выбран по умолчанию
        tabActiveClass: 'active-tab', //Класс который назначается выбранному табу
        containerActiveClass: 'active', //Класс который назначается выбранному контейнеру
        tabContainerClass: 'tab-container', //Класс табконтейнеров табов
    });

}

