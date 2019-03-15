$('.product-gallery__photos').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-gallery__miniatures'
});

$('.product-gallery__miniatures').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-gallery__photos',
  focusOnSelect: true,
  prevArrow: '<button type="button" class="product-gallery__arrow  product-gallery__prev"></button>',
  nextArrow: '<button type="button" class="product-gallery__arrow  product-gallery__next"></button>',
});
