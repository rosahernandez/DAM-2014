/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl: '../app/scripts',
        paths:{
            'ydn-db': '../../app/bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim: {
            'ydn-db' :{
                exports : 'ydn'
            }
        }
    });

    describe('Database module', function () {
        var DB;

        beforeEach(function(done){
            require(['data'], function(data){
                DB = data;
                done();
        });

    });

    describe('put metodo', function () {
        it('add', function (done) {
            DB.insertarTwit({id: '12', text:'Soy un twit'}, function(){
                done();
            }, function(err){
                throw err;
            });
        });
    });

    describe('get metodo', function () {
        it('get', function (done) {
            DB.obtenerTwit('12', function(tweet){
                if (tweet.id === '12'){
                    done();
                } else{
                    throw err;
                }
            }, function(err){
                throw err;
            });
        });
    });

    describe('remove metodo', function () {
        it('remove', function (done) {
            DB.eliminarTwit('12', function(number){
                if(number === 1){
                    done();
                } else {
                    throw "No se ha podido eliminar";
                }

            }, function(err){
                throw err;
            });
        });
    });
    });
})();
