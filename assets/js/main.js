$(function(){
    // гамбургер меню
    $('.hamburger').on('click', function(){
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let headerPhone = $('.header-top_phon');

    if ($(window).width() < 976) {

        mobile = true;
        $('header .menu').append(headerPhone);
    }

    $(window).on('resize', function () {
        if ($(window).width() < 976 && !mobile) {
            mobile = true;
            $('header .menu').append(headerPhone);
        }
        
        if ($(window).width() >= 976 && mobile) {
            mobile = false;
            $('header .container .header-top .header-top_inner').prepend(headerPhone);
            $(this, 'header .menu').removeClass('active');
        }
    });

    $('.hearth-img').on('click',function(){
        $(this).toggleClass('active');
    });

});

// слайдер

$('.product-content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 662,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});















