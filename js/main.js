$(document).ready(function () {
  $(".offer__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    rtl: true,
  });

  $(".product__list").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    rtl: true,
  });
});

