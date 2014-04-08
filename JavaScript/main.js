(function(){

"use strict";

var enlaces = getElementsByTagName('a');
console.log (enlaces.length);

enlaces = document.querySelectorAll();
console.log (enlaces.length);

var enlaces = enlaces[enlaces.length-2];
console.log(enlaces);

var count=0;
for (var i = enlaces.length - 1; i >= 0; i--) {
    if (enlaces[i].href == "http://prueba/")
        count++;
}
console.log(count);

enlaces = document.querySelectorAll('a[href="http://prueba"]');
console.log(enlaces);

var parrafos = document.querySelectorAll('body > p');
if (parrafos.length >= 3)
    enlaces = parrafos.querySelectorAll('a');
    console.log(enlaces.length);


var parrafo = document.querySelectorAll('span');

})()