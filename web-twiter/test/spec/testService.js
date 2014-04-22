(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths:{
            'jquery': '../bower_components/jquery/dist/jquery',
            'sinon': '../bower_components/sinon/dist/jquery',
        },
        shim: {
            'ydn-db' :{
                exports : 'ydn'
            }
        }
    });

    describe ('Service module', function(){
        var srv;
        var $;
        //con require traemos los modulos dependientes y los guardamos en variables
        beforeEach(function(done){
            require(['Service','jquery'], function(Service, jquery){
                srv = Service;
                $ = jquery;
                done();
        });

    });

    describe('Test',    function (){
        beforeEach(function(){
                sinon.spy($,    'ajax');
                 done();
        });
        afterEach(function(){
                $.ajax.restore();
                done();
        });
    });

    describe('#getTweets', function () {
        it('$ ajax has been called ', function (done) {
            srv.getTweets();
            assert.isTrue($ajax.calledOnce);
            done();
            }, function() { //success
                if (twueets){
                    if (twueets.statuses && twueets.statuses.length >0){
                        done();
                    } else{
                        throw "el json no tiene datos";
                    }
                } else {
                    throw "No se han obtenido twets";
                }
            }, function(err) { //error
                throw err;
            });

        });
    });


    });

    })();