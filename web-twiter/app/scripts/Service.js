define ('Service', ['jquery'], function($){

    var getTweets = function(config, success, error){
        $.ajax({
            url : '/app/data/tweets.js'
            dataType : 'json',
            success : function(dasuccess,
            error : error
        });
    };

    return{
        getTweets: getTweets
    };
});