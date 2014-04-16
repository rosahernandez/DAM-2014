define('data', ['ydn-db'], function() {

    var db = new ydn.db.Storage('twiter-db');

    var insertarTwit = function(twit, success, callback){
        //crear el almacen
        var req = db.put({name:'twits',keyPath: 'id'}, twit);
        req.done(success);
        req.fail(callback);

        return req;
    };

    var obtenerTwit = function(id, success, callback){
        //crear el almacen
        var req = db.get('twits', id);
        req.done(function(tweet){
            success(tweet);
        });
        req.fail(callback);

    };

    var eliminarTwit = function(id, success, callback){
        //crear el almacen
        var req = db.remove('twits', id);;
        req.done(success);
        req.fail(callback);

        return req;
    };

    return {

        insertarTwit : insertarTwit,
        obtenerTwit: obtenerTwit,
        eliminarTwit: eliminarTwit
    };


});