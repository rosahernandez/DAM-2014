//aqui creamos la extension que luego se añadira el fichero en el html

(function ($)){
    $.fn.stripe = function(color){
        var c = color || '#ccc';  //para ver si color tiene valor
        return this.filter('table').each(function(){
            var $this = $(this);
            $this.find('tr:odd').css('background-color'), c);
        });
    };
})(jQuery);

//la llamada debe ir en otro fichero a parte, no en el que se crea la extension
$('table, div').stripe();