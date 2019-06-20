//Вариант 1
$(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1100);
        e.preventDefault();
        return false;
    });
});

//Вариант 2
$(function () {
    $("a.scrollto").click(function () {
     let elementClick = $(this).attr("href")
     let destination = $(elementClick).offset().top - 100;
     $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
     return false;
    });
  });

//Вариант 3
$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1100);
        e.preventDefault();
        return false;
    });
  });

//Вариант 4
$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  });

//Вариант 5
$(document).ready(function() {
    var margin = 100; // переменная для контроля докрутки
    $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
       }, {
          duration: 2600, // тут можно контролировать скорость
          easing: "swing"
       });
       return false;
    });
  });