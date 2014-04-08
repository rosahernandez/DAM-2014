//jQuwery

$(document).ready(function(){
    'use strict';

    var $filas = $('li.user');
    $filas each(function(idx, el){
        var $li = $(this);

        $li.data('name');
        $li.data('city');
        $li.data('name');

        if ($li.data('delete') === true) {
            $li.remove();
        }
    });


});