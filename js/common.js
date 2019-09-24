(function($) {
  $(function() {
    //Toggle the navigation menu, When you tap on the hamburger menu.
    $('#header_button').click(function(){
      $('header .nav').slideToggle();
    });

    //Occurs when changing the browser width.
    var timer = false;
    $(window).resize(function() {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        if($(window).width() > 768){
          //Forcibly displays the navigation menu when pc style.
          $('header .nav').show();
        }else{
          //Forcibly hide the navigation menu when mobile style.
          $('header .nav').hide();
        }
      }, 200);
    });
  });
})(jQuery);