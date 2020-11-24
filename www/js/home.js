
// Mobil Nav 


$(window).on("resize", function () {
  var positionTop = window.innerHeight / 2;
  $('#burger-home ul').css('top', positionTop);
  var marginTop = $('#burger-home ul').height() / 2;
  $('#burger-home ul').css('margin-top', -marginTop);
}).resize();


// --------------------------




