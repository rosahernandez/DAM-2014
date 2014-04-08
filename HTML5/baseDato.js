$(document).ready(function() {

var db = openDatabase('mydb', '1.0', 'My first database', 2 * 1024 * 1024);

    function addTweets() {
    //obtiene los datos y los almacena en la BD
    var tweets = $.ajax({...});
        $.each(tweets, function(tweet) {
            db.transaction(function (tx) {
                var time = (new Date(Date.parse(tweet.created_at))).getTime();
                tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                              [tweet.id, tweet.from_user, time / 1000, tweet.text]);
            });
        });
    }

    function getTweets() {
        db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM tweets WHERE date >= ?', ['2014-04-04'],
                      function callback(tx, results) {
                          var len = results.rows.length, i;
                          for (i = 0; i < len; i++) {
                            alert(results.rows.item(i).text);
                          }
                        },
                      function errorCallback(tx, error) {
                        alert(error.message);
                      }
                      );
        });
    }

    function updateTweets() {

        db.transaction(function (tx) {
            tx.executeSql('UPDATE tweets set (user, date, text) VALUES (?, ?, ?)',
                          [tweet.from_user, time / 1000, tweet.text], 'WHERE id= ', [5]);
                       function callback(tx) {
                          alert("modificado");

                        },
                      function errorCallback(tx, error) {
                        alert(error.message);
                      };
        });
    };

    function removeTweets() {

        db.transaction(function (tx) {
            tx.executeSql('DELETE tweets WHERE id= ', [5]);
                       function callback(tx) {
                          alert("borrado");

                        },
                      function errorCallback(tx, error) {
                        alert(error.message);
                      };
        });
    };

});