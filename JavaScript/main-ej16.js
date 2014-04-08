var anade = (function){
        "user strict"

var anade = function(){
    var boton = document.getElementByTagName("button");
    if (boton.length >0){
        //añadir un elemento a la lista
        var lista   = document.getElementById("lista");
        var nodo = document.createElement("li");
        var contenido = document.createTextNode("nuevo elemento");
        nodo.appendChild(contenido);
        lista.appendChild(nodo);
    }

};

return anade;

})()

var anade = (function  () {

    var lista = $('#lista'),
    lis = lista.children,
    count = lista.children.length;

    console.log(lis);
    function mostrarTexto(e){
        console.log(e);
    };

    for (var i = lis.length - 1; i >= 0; i--) {
        lis[i].addEventListener('click'), mostrarTexto(e));

    }

    var anade = function(){
        var li = document.createElement('li');
        li.inerText ="Elemento" + (++count);
        lista.appendChild(li);
    }

})