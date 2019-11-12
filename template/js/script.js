//sliders

$(document).ready(function() {
    $('.top-slider__inner').slick({
        prevArrow: '<button type="button" class="top-slider__btn top-slider__btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="top-slider__btn top-slider__btn--next"><span class="vh">next</span></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    arrows: false
                }
            }
        ]
    });

        
    $('.hotel-slider').slick({
        prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>',
        rows: 2,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    rows: 2,
                    slidesPerRow: 2,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.clients__feedback-slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        dotsClass: 'face-dots'
    });
    $('<div class="feedback-slide__mask"></div>').prependTo('.clients__feedback-slider');

    $('.clients__com-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
        nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    });
    if (window.innerWidth <= 414) {
        $('.promo__block > .inner').slick({
            arrows: false,
            autoplay: true
        });
        $('.cat-icons__cont').slick({
            arrows: false
        })
    };
    if(window.innerWidth <= 768) {
        $('.articles__cont').slick({
            slidesToShow: 2,
            arrows: false,
            dotsClass: 'face-dots',
            dots: false,
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        })
    };
    if(window.innerWidth <= 414) {
        $('.popular-tabs__body-item').slick({
            slidesToShow: 1,
            arrows: false,
            variableWidth: true,
            centerMode: true,
            arrows: false
        });
        if ($('.advan__cont').length) {
            $('.advan__cont').slick({
                arrows: false,
                autoplay: true
            })
        }
    };
    if(window.innerWidth <= 480) {
        $('.cat-thumbs__inner').slick({
            arrows: false
        })
    };
    const $chessSlider = $('.chess__slider-inner'),
        $chessNav = $('.chess__slider-nav');
    if($chessSlider.length) {
        $chessSlider.each(function() {
            $(this).slick({
                appendArrows: $(this).next($chessNav),
                prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
                nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>'
            })
        })
    };
})


//hovercard
$(document).ready(function() {
    let card = $('.card-item');
    card.each(function() {
        const $target = $(this).find('.card-item__native'),
            html = $target.html();
        $target.parent().find('.card-item__append').html(html);
        if(window.innerWidth <= 1280) {

        }
    })
    if (window.innerWidth <= 1280) {
        $('.popular-tabs__body-item .card-item').each(function() {
            $(this).find('.card-item__native').remove();
        });
    }
});
$('.add-to-fav-btn').click(function() {
    $(this).toggleClass('is-active');
});

//change view
let $styleBtn = $('.cards-sort__btn'),
    $cardsContainer = $('.cards-block__body');
$styleBtn.click(function() {
    if(!$(this).hasClass('is-active')) {
        $(this).addClass('is-active').siblings().removeClass('is-active');
    };
    let btnData = $(this).data('style')
        oldClass = ['is-masonry', 'is-list'];
    $cardsContainer.removeClass(oldClass).addClass(btnData);
})

//filter btn
const filterBtn = $('.mob-filter'),
filterBlock = $('.filter-block');

filterBtn.click(function() {
    if(!$(this).hasClass('is-active')) {
        $(this).addClass('is-active');
        filterBlock.addClass('is-active');
        filterBtn.html('Закрыть');
    } else {
        $(this).removeClass('is-active');
        filterBlock.removeClass('is-active');
        filterBtn.html('Фильтр');
    }
});

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

//rangeslider

let $rSlider = $('.js-range-slider'),
    $rSliderMin = $('.js-range-min'),
    $rSliderMax = $('.js-range-max');

$rSlider.ionRangeSlider({
    type: 'double',
    min: 0,
    max: 10000,
    hide_min_max: true,
    hide_from_to: true,

    onStart: function (data) {
        $rSliderMin.prop('value', data.from);
        $rSliderMax.prop('value', data.to);
    },
    
    onChange: function (data) {
        $rSliderMin.prop('value', data.from);
        $rSliderMax.prop('value', data.to);
    }
});

//modal
function mLayer() {
    let modalLayer = $('.modal-layer');
    if (!modalLayer.hasClass('is-active')) {
        $('html').addClass('is-modal');
        $('body').addClass('is-modal');
        modalLayer.addClass('is-active');
    } else {
        $('html').removeClass('is-modal');
        $('body').removeClass('is-modal');
        modalLayer.removeClass('is-active');
    }
}


//modal elements
$('.modal-layer').on('click', function (e) {
    if (e.target == this) {
        $('aside.left-bar, .left-filter').removeClass('is-active');
        mClose();
    }
})

//modal close
function mClose() {
    $(this).removeClass('is-active');
    $(this).parent().removeClass('is-active');
    $('html').removeClass('is-modal');
    $('body').removeClass('is-modal');
    $('.modal-layer').removeClass('is-active');
};

//left-menu
const $leftBar = $('.left-bar'),
    $leftBarList = $('.left-bar__list'),
    $leftBarLink = $('.left-bar__list > .left-bar__item > .left-bar__link');

    $leftBarLink.click(function(e) {
    if(window.innerWidth >= 641) {
        if (!$leftBarList.hasClass('is-active') || !$(this).next('.left-bar__subcont').hasClass('is-active')) {
            e.preventDefault();
        }
        $leftBarList.addClass('is-active'); 
        $(this).addClass('is-active');
        $(this).parent().siblings().children($leftBarLink).removeClass('is-active');   
        $(this).next('.left-bar__subcont').addClass('is-active');
        $(this).parent().siblings().children('.left-bar__subcont').removeClass('is-active');
    } else {
        if(!$(this).hasClass('pointer')) {
            e.preventDefault();
            $leftBar.addClass('is-mob');
            $(this).next('.left-bar__subcont').addClass('is-mob')

        }
    }
})


//copying titles and create close-buttons
$(document).ready(function() {
    let $titles = $('span.left-bar__title');
    $titles.each(function() {
        let $cloned = $(this).clone();
        $cloned = $(this).before($cloned);
        $cloned.addClass('left-bar__title--hover');
    });
    let $subCont = $('.left-bar__subcont');
        
        $subCont.each(function() {
            $(this).append('<button class="left-bar__close-btn js-left-bar-close" type="button" name="close-left-button"><span class="vh">close</span></button>');
        })
})

//close menu
$(document).ready(function() {
    $('.js-left-bar-close').click(closeMenu);
    function closeMenu() {
        $('.left-bar__list, .left-bar__subcont, .left-bar__link').removeClass('is-active is-mob');
        $leftBar.removeClass('is-mob');
    }
    $(window).click(function() {
        closeMenu();
    });
})
$leftBarList.click(function (e) {
    e.stopPropagation();
});

//mobmenu
const burgerBtn = $('.top-burger');
burgerBtn.click(function() {
    const leftMenu = $('.left-bar');
    mLayer();
    leftMenu.addClass('is-active');
})

//masked
$(function($) {
    $('.phone-input').mask('+7 (999) 999-99-99'); 
});

//dropzone


//scroll top
function toTop() { //smooth scroll
    const scrollStep = document.body.scrollHeight / 100;
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -(scrollStep));
        setTimeout(toTop, 0);
    } else {
        return false
    }
};
$('.go-top-btn').click(toTop)