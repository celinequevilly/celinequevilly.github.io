//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js

$(document).ready(function() {
  $("#errorMessage").hide();
});

// Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

// Gestion de la mise en forme des champs de saisie selon s'ils sont vides ou pleins
$(".field-form").focusout(function(e) {
  if ($(e.target).val() === "") {
    $(e.target).removeClass("not-empty");
  } else {
    $(e.target).addClass("not-empty");
  }
});

// Envoi du mail
$("#buttonSend").click(function(e) {
  $("#errorMessage").hide();
  // Pour empêcher le rechargement de la page
  e.preventDefault();

  // Vérification que tous les champs sont bien remplis
  if ($("#name").val() !== "" && $("#email").val() !== "" && $("#name").val() !== "") {
    // Data object
    var oData = {
      name: $("#name").val(),
      email: $("#email").val(),
      msg: $("#msg").val()
    }

    $.post("sendMail.php", oData, function(sResponse) {
      // Affichage de la réponse du serveur
      $("#contactResponse").html(sResponse);
      // Effacer le texte après 3 secondes
      setTimeout(function() {
        $("#contactResponse").html("");
      }, 10000);
    });
  } else {
    $("#errorMessage").show();
  }

})