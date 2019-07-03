//Smooth scroll to anchor link
function slowScroll(id) { 
    var offset = 0;
    $('html, body').animate({ 
         scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
}

//Fixed header
jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>120){
            $('.main-header').addClass('fixed'); 
        }
        else if ($(this).scrollTop()<120){
            $('.main-header').removeClass('fixed');
        }
    });
});