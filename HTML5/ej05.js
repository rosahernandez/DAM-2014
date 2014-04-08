(function(){

"use strict";

var enlaces = $('li.user');
var res = $('#result');

for (var i =0 ; i<= enlaces.length; i++) {

    var resultados = [];
    var data = enlaces[i].data();
    for (var j in data) {
         resultados.push([j, data[j]]);
    }
    res.append('<ul></ul>');

    for (var k = resultados.length - 1; k >= 0; k--) {

       res.append('<li>' + resultados[k][0] + ":" + resultados[k][1] + '</li>');
    };

    for (var i = enlaces.length - 1; i >= 0; i--) {
        if ($(enlaces[i]).data('delete')) {
            $(enlaces[i]).remove();
        }

    };

}

})()