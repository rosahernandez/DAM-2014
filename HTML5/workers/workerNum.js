function calcularPrimos(numero){
    var primo;
    var totalPrimos=0;
    var arrayPrimos = new Array();

    for(var i=0;i<=(Math.max(numero));i++){
        primo=1;

        if(i==0 || i==1) // Comprueba si es 0 o 1 para evitar errores al generalizar con los otros números
        {
            arrayPrimos[totalPrimos]=i;
            totalPrimos++;
        }else{


        for(var j=2;j<i;j++){ // Se comprueba que el residuo sea diferente de 0 para decidir si es o no primo
            if(i%j==0 ){
                primo=0;
                break;
            }
        }
            if(primo==1)
            {
                arrayPrimos[totalPrimos]=i;
                totalPrimos++;
            }
        }

    }
    return arrayPrimos;
}

this.addEventListener('message', function(e) {
    var data = e.data;
    switch (data.cmd) {
        case 'primo':

            var lista = calcularPrimos (parseInt(data.msg));
            for (var i = lista.length - 1; i >= 0; i--) {
                resultado = resultado + "," + lista[i];
            };
            this.postMessage('WORKER RESULT: '+ resultado);
            break;

        default:
            this.postMessage('Unknown command: ' + data.msg);
    };
}, false);

