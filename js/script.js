// SMOOTH SCROLL

$(function() {
  $('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 900);
        return false;
      }
    }
  });
});

// END Smooth Scroll



/* Content fade in on scroll *

$(document).ready(function() {

  /* Every time the window is scrolled ... *
  $(window).scroll(function() {

    /* Check the location of each desired element *
    $('.hideme').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in *
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 800);

      }

    });

  });

});

// END Fade in on Scroll */



/* Navbar: Highlight current page */

$( document ).ready(function() {
    // Get current URL
    var pathname = window.location.pathname;
    // Split URL to get page name
    var parts = pathname.split("/");
    // The page name is the last part
    var pageName = parts[parts.length - 1];
    // Depending on page name
    switch(pageName) {
      case 'about.php':
        $('#link01').addClass('selected');
        break;
      case 'photography.php':
        $('#link02').addClass('selected');
        break;
      case 'design.php':
        $('#link03').addClass('selected');
        break;
    }
});

// END Navbar: Highlight current page */


// Nav Dots : Highlight dots current slide

$(window).bind('scroll', function () {
  highlightSelection();
});

function highlightSelection(){
  // Différentes pages
  highlightMenuItem($("#slide01"));
  highlightMenuItem($("#slide02"));
  highlightMenuItem($("#slide03"));
  highlightMenuItem($("#slide04"));
  highlightMenuItem($("#slide05"));
  highlightMenuItem($("#slide06"));
}

function highlightMenuItem(page){
  // Distance au haut de la page
  var offset = $( window ).scrollTop();
  
  // Taille de la fenêtre
  var height = $( window ).height();
  
  // Distance au haut de la page du milieu de la fenêtre
  var midPage = offset + height / 2;
  
  var pageTop = page.offset().top;
  var pageBottom = pageTop + page.height();
  
  if(pageTop < midPage && pageBottom > midPage){
    var dot = $("#nav-dot-"+page.attr("id"));
    $(".nav-dot").removeClass("selected");
    dot.addClass("selected");  
  }
}


// END Nav Dots : Highlight dots current slide





