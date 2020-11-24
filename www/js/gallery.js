$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

// Select effect
$( document ).ready(function(){
	// Gallery 1
	$(".basicBox").click(function(){
		$(".basicBox").removeClass("selected");
		$(this).addClass("selected");
	});
	// Gallery 2
	$(".checkBox").click(function(){
		$(".checkBox").removeClass("selected");
		$(this).addClass("selected");
	});
  // Gallery all
  $(".bitBox").click(function(){
    $(".bitBox").removeClass("selected");
    $(this).addClass("selected");
  });
});



// Open Image Gallery

// Image overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// An image to overlay
$overlay.append($image);
$overlay.hide();

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#portfolio div").click( function(event) {
    if ($(window).innerWidth() <= 580) {
      return;
    }

  	event.preventDefault();
    var imageLocation = this.firstElementChild.src;

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    // Size of original image
    var sourceWidth  = this.firstElementChild.width;
    var sourceHeight = this.firstElementChild.height;
    // Size of the window to display image
    var targetWidth  = $(window).innerWidth()  * .8;
    var targetHeight = $(window).innerHeight() * .8;
    // Ratios
    var widthRatio   = targetWidth / sourceWidth;
    var heightRatio  = targetHeight / sourceHeight;

    // If the limit is the window width
    if (widthRatio > heightRatio) {
    	$image.attr("height", sourceHeight * heightRatio);
    	$image.attr("width",  sourceWidth  * heightRatio);
    } else {
    	// The limit is the window height
    	$image.attr("height", sourceHeight * widthRatio);
    	$image.attr("width",  sourceWidth  * widthRatio);
    }

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });