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

    var updateTweet = function(tweet, success, error) {
        getTweet(tweet.id, function(t){
            if(t) {
                var req = db.put({name: tweetTable, keyPath: keyPath}, tweet);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + tweet.id);
            }
        }, error);
    };

    var removeTweet = function(id, success, error){
        getTweet(id, function(tweet) {
            if(tweet) {
                var req = db.remove(tweetTable, id);
                req.done(success);
                req.fail(error);
            } else {
                error('There is no tweet with id ' + id);
            }
        });
    };

    var clear = function(success, error){
        var req = db.clear(tweetTable);
        req.done(success);
        req.fail(error);
    };


    return {

        insertarTwit : insertarTwit,
        obtenerTwit: obtenerTwit,
        eliminarTwit: eliminarTwit,
        updateTweet : updateTweet,
        removeTweet : removeTweet,
        clear : clear
    };


});