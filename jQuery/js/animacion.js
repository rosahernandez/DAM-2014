$(document).ready(function(){
    'use strict';

    var $boxes = $('.box');
    var $width = $(document).width();

$boxes.css({
    'width' : '50px',
    'height': '50px',
    'color': 'yellow',
    'background-color': 'blue',
    '-webkit-transform': 'translateX(' + ($width - 100) + 'px)',
    '-webkit-transition-property' : 'all',
    '-webkit-transition-property' : 'ls'
});
/*
    $boxes.animate({
        'height': '50px',
        'width' : '50px',
        'color': 'yellow',
        'background-color': 'red',
        'font-size': '18px',
        'left' : '100%'
    }, 1000 );
*/
});