(function () {
    'use strict';

    require.config({
        baseUrl : '../../app/scripts/',
        paths : {
            // jquery: '../bower_components/jquery/dist/jquery',
        },
        shim : {
            // 'ydn-db': {
            //     exports : 'ydn'
            // }
        }
    });

    describe('Controller module', function () {
        var ctrl, srv, DB;

        beforeEach(function(done){
            require(['controller', 'Service', 'data'], function(Controller, Service, Data){
                ctrl = Controller;
                srv = Service;
                DB = Data;

                sinon.spy(srv, 'getTweets');
                sinon.spy(DB, 'insertarTwit');
                done();
            });
        });

        afterEach(function(done){
            // srv.getTweets.restore();
            // srv.addTweets.restore();
            done();
        });

        describe('#getTweetsFromTwitter', function () {
            it('Get all tweets from Twitter and save to DB', function (done) {
                ctrl.getTweetsFromTwitter(function(){
                    assert.isTrue(DB.insertarTwit.calledOnce, 'addTweets not called');
                    DB.obtenerTodos(function(tweets){
                        assert.equal(100, tweets.length);
                        done();
                    });
                });
                assert.isTrue(srv.getTweets.calledOnce, 'getTweets not called');
                //
                // DB.getTweets(function(tweets){
                //      assert.equal(100, tweets.length);
                // });

            });
        });
    });
})();