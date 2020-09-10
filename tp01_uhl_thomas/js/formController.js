let validation = function(event) {
    event.preventDefault();
    $('#error').css("display", "none");    


    if ($('#password').val().length < 8) {
        $('#error').text('Le mot de passe doit contenir 8 caractères au minimum.');
        $('#error').css("display", "block");
    }
    else if ($('#password').val() != $('#pass-confirmation').val()) {
        $('#error').text('La confirmation du mot de passe est différente du mot de passe.');
        $('#error').css("display", "block");
    }

}


$('form').submit(validation);


