$(document).ready(function(){
        var $this = $(this);

        var $input = $this.find('#recurso');
        var $contenidos = $this.find('#contenidos');
        var $estado = $this.find('#estado');
        var $codigo = $this.find('#codigo');

        $input.val(window.location);


     $(document).on('click', '#enviar', function(e){
        var $this = $(this);

        $.ajax({
                url : $input.val(),
                cache : 'false',
                success : function(data, textStatus, jqXHR){
                    $contenidos.text(data);
                    $cabeceras.text(jqXHR.getAllResponseHeaders());
                    $estado.text(textStatus);
                    $codigo.html(jqXHR.status + "<br/>" + jqXHR);
                },
                error : function(jqXHR, textStatus, errorThrown){
                    console.log(errorThrown);
                }
            });
     });

});
