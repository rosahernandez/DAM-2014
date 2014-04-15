define('Buzz',[], function(n) {

var isBuzz = function(n) {
    console.log('numero:'+n);
        if ((n % 5) == 0){
            console.log("resultado:"+'true');
                return true;

            } else {
                console.log("resultado:"+'false');
                return false;
            }
        }
        return  {
            isBuzz   :   isBuzz
        };
});