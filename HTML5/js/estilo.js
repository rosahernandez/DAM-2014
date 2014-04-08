$(document).on('blur', 'input', function(event) {

    var inputs = $('#form').find('input');

    for (var i = inputs.length - 1; i >= 0; i--) {

            if (inputs[i].validity.valid && $(inputs[i]).val().length > 0) {

                console.log("soporta el tipo :" + inputs[i].val());

            } else {
                console.log("soporta el tipo ");
            }

    };

});

