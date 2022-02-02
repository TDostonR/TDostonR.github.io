$(function(){
    
    $('.slider-box').slick({
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/info/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/info/arrow-right.svg " alt="arrow-right">',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                }
            },
        ]
    });


    $('.menu-btn').on('click', function(){
        $('.menu-list').toggleClass('active');        
    });

});