$(document).ready(function() {

    $(document).on('ready', '', function(event) {

        $('#textoss').val(localStorage.getItem('textoss'));

    });

    function manejadorEventos(elEvento) {
        var evento = elEvento || window.event;
        if (evento.newValue === null) {

        } else {

             $('#textoss').val(localStorage.getItem('textoss'));
        }

    }

    window.addEventListener("storage", manejadorEventos, false);

    $(document).on('keyup', '#textoss', function(event) {

        localStorage.setItem('textoss', $(this).val());
    });

});