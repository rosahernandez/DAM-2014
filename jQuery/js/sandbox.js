$(document).ready(function(){
    'use strict';

    var $divs= $('div.module');
    console.log($divs[0]);

    var $li = $('#myList li').eq(2);
    $li = $('#myList').find ('li').eq(2);
    $li = $('#myListItem'); //es el mejor porque va directo al id y es lo mas rapido



    var $input = $('input.input_text');
    var $label = $input.closest('form')
                        .find('label[for="' + $input.attr('name') + '"]');

    var $ocultos = (':hidden');

    var $img = $('img[alt]');

    //var $filas= $('tbody tr:odd').css('background-color', 'gray');

    //añadir una nueva clase al formulario
    $input = $('input.input_text');
    $input.closest('form').addClass('formulario');

    //
    var $current = $('#myList .current');
    $current.removeClass('current').next().addClass('current');


    var $selector = $('#specials select').closest('form').find('input[type=submit]');


    $imgs.each(function(idx, el){
        console.log(el.alt);
    });

    $('#slideshow li:first-child').addClass('current').siblings().addClass('disable');



    var myItems = [], $myList = $('#myList');
    for (var i=0; i<5; i++) {
        myItems.push('<li>item ' + i + '</li>');
    }
    $myList.append(myItems.join(''));

    $('#myList li:even').remove();

    $('div.module:last').append('<h2>nuevo<p>otro parrafo</p></h2>');

    $('select[name=day]').append('<option value="wedenesday">Wednesday</option>');

    var $div = $('div.module').last();
    var $mew = $('<div/>', {
            'class' : module,
            'id' : myModule
    });
    $mew.append($imgs.first().cione()).insertafter($div);
});