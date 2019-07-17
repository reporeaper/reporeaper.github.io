$('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<img class="slick-prev" src="images/arrow_prev.svg" width="20px" height="20px">',
    nextArrow: '<img class="slick-next" src="images/arrow_next.svg" width="20px" height="20px">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
      },
      {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  });

  //<img src="images/arrow_next.svg" width="20px" height="20px">
  //prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_prev.svg" width="20px" height="20px"></button>',
  //nextArrow: '<button type="button" class="slick-prev"><img src="images/arrow_next.svg" width="20px" height="20px"></button>'