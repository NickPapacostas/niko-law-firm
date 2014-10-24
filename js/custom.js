// mostly from http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      window.tar = target;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        $('nav .current').removeClass('current');
        $('nav a[href=#' + tar.attr('id') + ']').parent().addClass('current');
        return false;
      }
    }
  });
});