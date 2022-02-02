$(function(){

    $('.top-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                }
            },
        ]
    });

    $('.review-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 846,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

});