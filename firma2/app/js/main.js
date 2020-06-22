$(function () {

  $('.partners__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true
  })

  $('.help__menu').on('click', function () {
    $('.help__menu-dropdown').toggleClass('visually-hidden'),
      $('.rect').toggleClass('visually-hidden')
  })

})