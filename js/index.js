$(document).ready(function () {
  $('.certificate__slider').slick({
    arrows: true,
    dots: true,
    //  adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: '_linear',
    draggable: false,

    waitForAnimate: false,
    responsive: [{

        breakpoint: 880,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});


$(document).ready(function () {
  $(".menuToggle").click(function () {
    $(this).toggleClass("active");
    $('.menu__list').slideToggle(300, function () {
      if ($(this).css('display') === "none") {
        $(this).removeAttr('style');
      }
    });
  });
});