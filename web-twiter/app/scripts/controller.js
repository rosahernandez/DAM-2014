define('controller',['data', 'Service'], function(DB,srv){
    'use strict';

    var getTweetsFromTwitter = function(success, error){
        srv.getTweets({}, function(data) {
            processTweets(data, success, error);
        }, error);
    }

    var processTweets = function(data, success, error){
        var tweets = [];

        if(data && data.statuses && data.statuses.length > 0) {
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                var tweet = {
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    created_at : new Date(data.statuses[i].created_at),
                    user : {
                        id : data.statuses[i].user.id_str,
                        name : data.statuses[i].user.name,
                        image : data.statuses[i].user.profile_image_url
                    }
                };
                tweets.push(tweet);
            };
            DB.insertarTwit(tweets, success, error);
        }
    };

    return{
        getTweetsFromTwitter: getTweetsFromTwitter,
        processTweets : processTweets
    };
});