$(function () {

  $(document).ready(function () {
    $(".button").click(function () {
      var value = $(this).attr("data-filter")
      var elem = $(".elem")
      if (value == "all") {
        $(elem).show("500")
      }
      else {
        $(elem).not("." + value).hide("500")
        $(elem).filter("." + value).show("500")
      }
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn()
    } else {
      $('#toTop').fadeOut()
    }
  })
  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 777)
  })

  new WOW().init()

})

function slowScroll(id) {
  var offset = 0
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1000)
  return false
}