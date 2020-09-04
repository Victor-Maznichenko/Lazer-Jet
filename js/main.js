$(function() {
    $('.header__user-profile-btn').on('click', function() {
        $('.header__user-profile-drop').toggleClass('header__user-profile-drop--active')
    });

    $('.main__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
    });

    $('.tab').on('click', function(e) { //при клике
        e.preventDefault(); // убрать стандарное действие кнопки/ссылки

        $($(this).siblings()).removeClass('tab--active'); //убрать у ВСЕХ табов класс активен
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active'); //убрать у ВСЕГО контента класс активен

        $(this).addClass('tab--active'); //добавить ЭТОМУ табу класс активен
        $($(this).attr('href')).addClass('tabs-content--active') //обращение к контенту на который нажимаю, и добавление "контент активен"

    });

    $('.partners__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="partners__slider-btn partners__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="partners__slider-btn partners__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1551,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1251,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 901,
            settings: {
                slidesToShow: 2,
            }
        }

        ]
    });

    $('.review__slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        // autoplay: true,
        slidesToScroll: 1,
        prevArrow: '<button class="partners__slider-btn partners__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="partners__slider-btn partners__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [{
            breakpoint: 1411,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1011,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        }
        ]
    });

    $('.header__search-img').on('click', function() {
        $('.header__search').toggleClass('header__search--active');
        $('#body').toggleClass('#body--active');
    });
    $('.header__menu-btn').on('click', function() {
        $('.header__menu').toggleClass('header__menu--active');
        $('.body').toggleClass('body--active');
        $('.header__menu-btn-close').toggleClass('header__menu-btn-close--active');
    });
    $('.header__menu-btn-close').on('click', function() {
        $('.header__menu').toggleClass('header__menu--active');
        $('.body').toggleClass('body--active');
        $('.header__menu-btn-close').toggleClass('header__menu-btn-close--active');
    });


        $('.footer__item-title').on('click', function() {
            $(this).toggleClass('footer__item-title--active');
            $(this).next().slideToggle(500);
        });

});