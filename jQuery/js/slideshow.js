var $neslider = $('#slideshow').bxSlider;
$(document).ready(function(){
    $('#slideshow').bxSlider({
        'mode' : 'fade',
        'controls' : false,
        'pager' : false,
        'onSlideBefore': onSlideBefore,
        'onSlideAfter': onSlideAfter,
    });

    $(document).on('click'), 'href', function(e){
         e.preventDefault();
         $slideshow.goToPrevSlide();
    }

    $(document).on('click'), 'href', function(){
         e.preventDefault();
         $slideshow.goToNextSlide();
    }

    var onSlideBefore (function($sliderElement, oldIndex, newIndex){
        console.log($sliderElement, oldIndex, newIndex);
    })

    $('#slideshow').fancybox({
        'openEffect' : 'none',
        'closeEffect' : 'none',
    });


});


