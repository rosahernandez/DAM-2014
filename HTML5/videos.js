(function(){

"use strict";

var video = document.getElementsByTagName('video');
var bstop = document.getElementsByName('stop');
var bpausa = document.getElementsByName('pausa');
var bcompleta = document.getElementsByName('completa');

video.addEventListener('canplay', function(e) {
    this.volume = 0.4;
    this.currentTime = 10;
    this.play();
}, false);

bstop.onclick = function(e) {
    video.stop();
};


bpausa.onclick = function(e) {
    video.pause();
};


bcompleta.onclick = function(e) {
    if (video.requestFullScreen) video.requestFullScreen();
    else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
}
})()