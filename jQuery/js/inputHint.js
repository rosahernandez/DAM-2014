$(document).ready(function(){
    'use strict';

    var $input = $('input.input_text');
    var $label = $input.closest('form')
                        .find('label[for="' + $input.attr('name') + '"]');
    var $sugerencia = $label.text();

    $input.val($label.text());
    $input.addClass('hint');
    $label.remove();

    $input.on('focus', function(e) {
        var $this = $(this);
        if ($this.val() === $sugerencia) {
            $this.val('');
            $this.removeClass('hint');
        }
    });

    $input.on('blur', function(e) {
        var $this = $(this);

        if ($this.val().length == 0) {
            $this.val($sugerencia);
            $this.addClass('hint');
        }
    });


});