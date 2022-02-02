$(function(){

    $('.header-content__slider').slick({
       dots: true,
       prevArrow: '<button type="button" class="slick-prev"><img src="images/header/prev-arrow.svg" alt=""></button>',
       nextArrow: '<button type="button" class="slick-next"><img src="images/header/next-arrow.svg" alt=""></button>',
       fade: true,
       responsive: [
           {
               breakpoint: 371,
               settings: {
                   dots: false,
                   arrows: false,
                   autoplay: true,
                   autoplaySpeed: 1500,
               }

           },
       ]
    });


    $('.product-name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product-content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product/product_prev-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product/product_next-arrow.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 461,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });


    $('.product-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-name',
        fade: true,
        arrows: false,
        centerMode: true,
    });

    $('.menu-btn').on('click', function() {
        $('.menu-list').toggleClass('menu-list--active');
    });

});