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

    if(window.innerWidth >= 540) {
        
        $('.hotel-slider').slick({
            slidesToShow: 4,
            prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
            nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>'
        });
    };

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
            arrow: false,
            variableWidth: true,
            centerMode: true,
            arrows: false
        })
    }
})


//hovercard
$(document).ready(function() {
    let card = $('.card-item');
    card.each(function() {
        const $target = $(this).find('.card-item__native'),
            html = $target.html();
        $target.parent().find('.card-item__append').html(html);
    })
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
let closeBtn = $('.js-modal-close');
function mClose() {
    $(this).removeClass('is-active');
    $(this).parent().removeClass('is-active');
    $('html').removeClass('is-modal');
    $('body').removeClass('is-modal');
    $('.modal-layer').removeClass('is-active');
};
closeBtn.click(mClose);

//left-menu 
const $leftBarList = $('.left-bar__list'),
    $leftBarLink = $('.left-bar__link'),
    $closeBtn = $('.js-left-bar-close');

$leftBarLink.click(function(e) {
    if(!$leftBarList.hasClass('is-active')) {
        e.preventDefault();
    }
    $leftBarList.addClass('is-active');    
    $(this).next('.left-bar__subcont').addClass('is-active');
    $(this).parent().siblings().children('.left-bar__subcont').removeClass('is-active');
})
//copying and create nodes
$(document).ready(function() {
    $leftBarLink.each(function() {
        //copying left-bar__title and addClass &--hover
    });

})
//close menu
$closeBtn.click(function() {
    $('.left-bar__list, .left-bar__subcont').removeClass('is-active');    
}) 

//mobmenu
const burgerBtn = $('.top-burger');
burgerBtn.click(function() {
    const leftMenu = $('.left-bar');
    mLayer();
    leftMenu.addClass('is-active');
})

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