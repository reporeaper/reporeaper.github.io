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

})

function slowScroll(id) {
  var offset = 0
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1000)
  return false
}