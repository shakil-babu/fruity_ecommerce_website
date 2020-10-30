
// for sidenav
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  //for carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,

  });

  // for autocomplete input
  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });

// for back to top
$(document).ready(function(){
  $(window).scroll(function () {
         if ($(this).scrollTop() > 80) {
             $('#back-to-top').fadeIn();
         } else {
             $('#back-to-top').fadeOut();
         }
     });
     // scroll body to 0px on click
     $('#back-to-top').click(function () {

         $('body,html').animate({
             scrollTop: 0
         }, 800);
         return false;
     });

});


// end here