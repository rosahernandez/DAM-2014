$(document).ready(function(){

    var $login = $('#login');
    var $disponibilidad = $('#disponibilidad');

    $(document).on('click', '#comprobar', function(e){
        var $this = $(this);

        $.ajax({
            url : '../servidor/compruebaDisponibilidadJSON.php',
            type : 'POST',
            dataType : 'json',
            data : { login : $login.val() },
            cache : 'false',
            success : function(data, textStatus, jqXHR){
                procesaRespuesta(data);
            },
            error : function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });
     });

    function procesaRespuesta(data) {
      if (data.disponible == "si") {
            $disponibilidad.html("El nombre elegido ["+$login.val()+"] está disponible");
       } else {
            $disponibilidad.html("NO está disponible el nombre elegido ["+$login.val()+"]");
       }

    }

});