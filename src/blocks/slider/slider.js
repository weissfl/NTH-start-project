$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    dotsClass: 'slider__dots',
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    fade: false,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slider__prev"><svg class="slider__arrow" width="16" height="29"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider__arrow-img"></use></svg></button>',
    nextArrow: '<button type="button" class="slider__next"><svg class="slider__arrow" width="16" height="29"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider__arrow-img"></use></svg></button>',
  });
});

