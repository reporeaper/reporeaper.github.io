$('.carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
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
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  });

  //<img src="images/arrow_next.svg" width="20px" height="20px">