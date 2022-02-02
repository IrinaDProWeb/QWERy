$(function(){

    $('.slider-body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='./images/bromo-slider/prev-arrow.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./images/bromo-slider/next-arrow.svg' class='next' alt='2'>",

        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
              }
            }
        ]

       });

    $('.menu-burger__header').click(function() {
        $('.menu-burger__header, .menu-list').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
      });

});
