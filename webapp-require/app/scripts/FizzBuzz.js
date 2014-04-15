define('FizzBuzz',['Buzz','Fizz'], function(Buzz,Fizz) {
  console.log('App started');

        var isFizzBuzz = function(n) {
            if ((n % 3 == 0) && (n % 5 == 0)){
                console.log("resultado:"+'true');
                return(true);
            } else {
                console.log("resultado:"+'false');
                return (false);
            }
        }

        var testNumber   =   function(num)   {

            var resultado = "";
            //for (i=1; i<=num; i++) {
                if (isFizzBuzz(num)){
                    resultado = "FIZZBUZZ";
                } else if (Fizz.isFizz(num)) {
                    resultado = "FIZZ" ;
                } else if (Buzz.isBuzz(num)) {
                    resultado = "BUZZ";
                } else{
                    resultado = num;
                }

            //}
            console.log("resultado:"+resultado);
            //resultado = resultado.substring(0,resultado.length()-1);
            return resultado;
        };

        return  {
            testNumber   :   testNumber
        };
});