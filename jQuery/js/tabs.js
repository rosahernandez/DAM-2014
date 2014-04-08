$(document).ready(function(){
    'use strict';

    var $divs = $('div.module');
    $divs.hide();

    var $div_prim = $divs.first();
    var $new = ('<ul/>').addClass('tabs');

    $divs.each(function(idx, el){
        var $module = $(this);
        var $texto = $(this).find('h2').first().text();
        var $li = $('<li>', {
            'text': $texto
        });
        $li.data('target', $module);

        lis.push($li.get(0));


    });



    //añadir el escuchador

});
