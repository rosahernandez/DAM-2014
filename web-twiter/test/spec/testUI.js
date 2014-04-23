(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            jquery: '../bower_components/jquery/dist/jquery',
            handlebars: '../bower_components/handlebars.js/dist/handlebars',
        },
        shim : {
            'handlebars': {
                exports : 'Handlebars'
            }
        }
    });

    describe('UI module', function () {
        var $, UI, DB;

        beforeEach(function(done){
            require(['jquery', 'UI', 'data'], function(jQuery, ui, db){
                $ = jQuery;
                UI = ui;
                DB = db;

                done();
            });
        });

        describe('#showTweetsList', function (tweets) {
            it('show one tweet', function () {
                UI.showTweetsList([
                    {
                        id : 1,
                        text : 'Tweet de prueba'
                    }
                ]);
                assert.equal($('#twitter-list').children().length, 1);
            });
            it('show all tweets', function () {
                DB.obtenerTodos(function(tweets){
                    UI.showTweetsList(tweets);
                    assert.equal($('#twitter-list').children().length, 100);
                });

            });
        });
    });

})();