 $(document).ready(function() {
     var $this = $(this);

    //cargar las provincias
    $.getJSON('../servidor/cargaProvinciasJSON.php' , function(data) {
        $.each(data.provincias, function(codigo, nombre) {
            $('#provincias').append('<option>' + nombre + '</option>');
        });

    });

    $(document).on('change', '#provincias', function(e){
        //cargar los municipios de la provincia seleccionada
        $('#resto-form').show();
        var idProvincia = $(this).attr('codigo');
        $('#municipios').empty();

        $.getJSON('../servidor/cargaMunicipiosJSON.php?id=' + idProvincia, function(data) {
            console.log(JSON.stringify(data));
            $.each(data.municipios, function(codigo, nombre) {
                $('#municipios').append('<option>' + nombre + '</option>');
            });
        });
    });

 });
