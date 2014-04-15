define('app',[], function() {

    console.log('[Services  module  initialized]');



    require(['FizzBuzz', 'jquery'], function (app, $) {
        'use strict';
        // use app here
        console.log(FizzBuzz);
        console.log('Running jQuery %s', $().jquery);
    });

  console.log('App started');
});