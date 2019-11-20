$(document).ready(function () {
    //Jquery reloader
    ;(function (window, document, $, undefined) {
        if (!$) {
            return undefined;
        }
        let loaderUrl = '/preloader.svg';
        $.fn.extend({
            loader: function (enable) {
                if (enable) {
                    $(this).css('position', 'relative');
                    $(this).append(
                        '<div id="form_loader" style="position: absolute;z-index: 999;display: flex;flex-direction: column;justify-content: center;text-align: center;width: 100%;height: 100%;background: rgba(0,0,0,.15);left: 0;top: 0;">' +
                        '<img src="' + loaderUrl + '" alt="">' +
                        '</div>'
                    );
                } else {
                    $('#form_loader').remove();
                    $(this).css('position', 'auto');
                }
            },
            reloadObj: function () {
                let className = '';
                this[0].classList.forEach((item) => {
                    className += '.' + item;
                });
                $(className).loader(true);
                $.ajax({
                    url: window.location.href,
                    dataType: 'html',
                    success: function (resp) {
                        $(document).find(className).html($(resp).find(className).html());
                        $(className).loader(false);
                    }
                });
            }
        });
    }(window, document, window.jQuery));

    //Simple ajax form
    $(".form_ajax_go").submit(function () {
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
            beforeSend: function () {
                th.append(
                    '<div id="form_loader" style="position: absolute;z-index: 999;display: flex;flex-direction: column;justify-content: center;text-align: center;width: 100%;height: 100%;background: rgba(0,0,0,.15);left: 0;top: 0;">' +
                    '<img src="/preloader.svg" alt="">' +
                    '</div>'
                );
            },
            success: function () {
                th.trigger("reset");
                $.fancybox.open(
                    '<div class="message" style="text-align:center">' +
                    '<h2>Спасибо!</h2>' +
                    '<p>Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>' +
                    '</div>'
                );
                $('#form_loader').remove();
                setTimeout(function () {
                    $.fancybox.close();
                    $.fancybox.close();
                }, 3000);
            }
        });
        return false;
    });

    //Color input change
    $('.card-color___input').change(function () {
        let image = $(this).data('pick'),
            $target = $('.slider__for .slick-active');
        if (!image) {
            return;
        }
        $('.card__slider').loader(true);
        $target.attr('src', image);
        setTimeout(function () {
            $('.card__slider').loader(false);
        }, 1000);
    });

    //Quick view
    $('.quick-view-btn').click(function () {
        let url = $(this).data('url'),
            $modal = $('#quick-view');
        $modal.loader(true);
        $.fancybox.open({
            src: '#quick-view',
            type: 'inline',
            opts: {
                touch: false,
                afterShow: function () {
                    $.ajax({
                        url: url,
                        data: {
                            custom_action: true
                        },
                        method: 'GET',
                        dataType: 'html',
                        success: function (response) {
                            $modal.loader(false);
                            $modal.html(response);
                            reinit();
                        }
                    })
                }
            }
        });
        return false;
    });

    //Reinit function for after show quick view
    function reinit() {
        $('.quick-view .card-slider__inner > .slider__nav').slick({
            asNavFor: '.slider__for',
            slidesToShow: 4,
            arrows: false,
            focusOnSelect: true
        });
        $('.quick-view .card-slider__inner > .slider__for').slick({
            asNavFor: '.slider__nav',
            slidesToShow: 1,
            arrows: false
        });

        //Card
        $('#quick-view .amount > button').on('click', function () {
            let $input = $(this).siblings('.number'),
                val = +$input.val();
            if ($(this).hasClass('incr')) {
                val++;
            } else {
                val--;
            }
            if (val < 1) {
                val = 1;
                $(this).attr('disabled');
            }
            $input.val(val);
        });
        $('.card-color___input').change(function () {
            let image = $(this).data('pick'),
                $target = $('.slider__for .slick-active');
            if (!image) {
                return;
            }
            $('.card__slider').loader(true);
            $target.attr('src', image);
            setTimeout(function () {
                $('.card__slider').loader(false);
            }, 1000);
        });
    }


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
        swipeToSlide: true,
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
    }
    if (window.innerWidth <= 768) {
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
    }
    if (window.innerWidth <= 414) {
        $('.popular-tabs__body-item').slick({
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true,
            arrows: false
        });
        let $advanCont = $('.advan__cont');
        if ($advanCont.length) {
            $advanCont.slick({
                arrows: false,
                autoplay: true
            })
        }
    }
    if (window.innerWidth <= 480) {
        $('.cat-thumbs__inner').slick({
            arrows: false
        })
    }
    const $chessSlider = $('.chess__slider-inner'),
        $chessNav = $('.chess__slider-nav');
    if ($chessSlider.length) {
        $chessSlider.each(function () {
            $(this).slick({
                appendArrows: $(this).next($chessNav),
                prevArrow: '<button type="button" class="slider__round-btn slider__round-btn--prev"><span class="vh">prev</span></button>',
                nextArrow: '<button type="button" class="slider__round-btn slider__round-btn--next"><span class="vh">next</span></button>'
            })
        });
    }
    const $addCarts = $('.add-cards__body');
    if ($addCarts.length) {
        $addCarts.each(function () {
            $(this).slick({
                slidesToShow: 5,
                arrows: false,
                swipeToSlide: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 440,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            })
        });
    }
    $('.card__section .card-slider__inner > .slider__nav').slick({
        asNavFor: '.card__section .card-slider__inner > .slider__for',
        slidesToShow: 4,
        arrows: false,
        focusOnSelect: true,
    });
    $('.card__section .card-slider__inner > .slider__for').slick({
        asNavFor: '.card__section .card-slider__inner > .slider__nav',
        slidesToShow: 1,
        arrows: false,
    });
});

//Hover's card's
$(document).ready(function () {
    //Function init hover's
    function init_hovers() {
        let card = $('.card-item');
        card.each(function () {
            const $target = $(this).find('.card-item__native'),
                html = $target.html();
            $target.parent().find('.card-item__append').html(html);
            if (window.innerWidth <= 1280) {
                //WTF?! Kikel, else don't use this, removed!
            }
        });
        if (window.innerWidth <= 1280) {
            $('.popular-tabs__body-item .card-item').each(function () {
                $(this).find('.card-item__native').remove();
            });
        }
    }

    //Update hover's init on change filter's
    $(document).on('mse2_load', function () {
        init_hovers();
    });
    init_hovers();
});
$('.add-to-fav-btn').click(function () {
    $(this).toggleClass('is-active');
});

//Change view product's
let $styleBtn = $('.cards-sort__btn'),
    $cardsContainer = $('.cards-block__body');
$styleBtn.click(function () {
    if (!$(this).hasClass('is-active')) {
        $(this).addClass('is-active').siblings().removeClass('is-active');
    }
    let btnData = $(this).data('style'),
        oldClass = ['is-masonry', 'is-list'];
    $cardsContainer.removeClass(oldClass).addClass(btnData);
});

//Filter btn
const filterBtn = $('.mob-filter'),
    filterBlock = $('.filter-block');

filterBtn.click(function () {
    if (!$(this).hasClass('is-active')) {
        $(this).addClass('is-active');
        filterBlock.addClass('is-active');
        filterBtn.html('Закрыть');
    } else {
        $(this).removeClass('is-active');
        filterBlock.removeClass('is-active');
        filterBtn.html('Фильтр');
    }
});

//SKTabs
const skTabs = $('.sk-tabs');
if (skTabs.length) {
    (function (window, document, $, undefined) {
        if (!$) {
            return undefined;
        }
        $.fn.extend({
            SKtab: function (options) {
                let tabActiveClass = 'active',
                    containerActiveClass = 'active',
                    tabContainerClass = 'tab-container',
                    activeTab = 0;

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

//Range slider

let $rSlider = $('.js-range-slider'),
    $rSliderMin = $('.mse2_ms_price_0'),
    $rSliderMax = $('.mse2_ms_price_1');

$rSlider.ionRangeSlider({
    type: 'double',
    min: +$rSliderMin.val(),
    max: +$rSliderMax.val(),
    hide_min_max: true,
    hide_from_to: true,

    onStart: function (data) {
        $rSliderMin.prop('value', data.from);
        $rSliderMax.prop('value', data.to);
    },

    onChange: function (data) {
        $rSliderMin.prop('value', data.from);
        $rSliderMax.prop('value', data.to);
    },
    onFinish: function (data) {
        setTimeout(function () {
            $rSliderMin.val(data.from).change();
            $rSliderMax.val(data.to).change();
        }, 200);
    }
});

//Modal
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

//Fancybox
const switchBtn = $('.modalko__quest-btn, .modalko-forget');
switchBtn.click(function () {
    $.fancybox.close();
});


//Modal elements
$('.modal-layer').on('click', function (e) {
    if (e.target == this) {
        $('aside.left-bar, .left-filter').removeClass('is-active');
        mClose();
    }
});

//Modal close
function mClose() {
    $(this).removeClass('is-active');
    $(this).parent().removeClass('is-active');
    $('html').removeClass('is-modal');
    $('body').removeClass('is-modal');
    $('.modal-layer').removeClass('is-active');
}

//Left menu
const $leftBar = $('.left-bar'),
    $leftBarList = $('.left-bar__list'),
    $leftBarLink = $('.left-bar__list > .left-bar__item > .left-bar__link');

$leftBarLink.click(function (e) {
    if (window.innerWidth >= 641) {
        if (!$leftBarList.hasClass('is-active') || !$(this).next('.left-bar__subcont').hasClass('is-active')) {
            e.preventDefault();
        }
        $leftBarList.addClass('is-active');
        $(this).addClass('is-active');
        $(this).parent().siblings().children($leftBarLink).removeClass('is-active');
        $(this).next('.left-bar__subcont').addClass('is-active');
        $(this).parent().siblings().children('.left-bar__subcont').removeClass('is-active');
    } else {
        if (!$(this).hasClass('pointer')) {
            e.preventDefault();
            $leftBar.addClass('is-mob');
            $(this).next('.left-bar__subcont').addClass('is-mob');
        }
    }
});


//copying titles and create close-buttons
$(document).ready(function () {
    let $titles = $('span.left-bar__title');
    $titles.each(function () {
        let $cloned = $(this).clone();
        $cloned = $(this).before($cloned);
        $cloned.addClass('left-bar__title--hover');
    });
    let $subCont = $('.left-bar__subcont');

    $subCont.each(function () {
        $(this).append('<button class="left-bar__close-btn js-left-bar-close" type="button" name="close-left-button"><span class="vh">close</span></button>');
    })
});

//Close menu
$(document).ready(function () {
    $('.js-left-bar-close').click(closeMenu);

    function closeMenu() {
        $('.left-bar__list, .left-bar__subcont, .left-bar__link').removeClass('is-active is-mob');
        $leftBar.removeClass('is-mob');
    }

    $(window).click(function () {
        closeMenu();
    });
});

$leftBarList.click(function (e) {
    e.stopPropagation();
});

//Mobile menu
const burgerBtn = $('.top-burger');
burgerBtn.click(function () {
    const leftMenu = $('.left-bar');
    mLayer();
    leftMenu.addClass('is-active');
});

//Card
$('.amount > button').on('click', function () {
    let $input = $(this).siblings('.number'),
        val = +$input.val();
    if ($(this).hasClass('incr')) {
        val++;
    } else {
        val--;
    }
    if (val < 1) {
        val = 1;
        $(this).attr('disabled');
    }
    $input.val(val);
});

//Masked input's
$(function ($) {
    $('.phone-input').mask('+7 (999) 999-99-99');
});

//Smooth scroll top
function toTop() {
    const scrollStep = document.body.scrollHeight / 100;
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -(scrollStep));
        setTimeout(toTop, 0);
    } else {
        return false
    }
}

$('.go-top-btn').click(toTop);