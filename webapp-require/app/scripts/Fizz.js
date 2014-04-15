define('Fizz',[], function(n) {

    var isFizz = function(n) {
           var isFizz =n % 3 == 0;
           console.log("resultado:"+isFizz);
           return isFizz;
    }

    return  {
        isFizz   :   isFizz
    };
});