$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    var $input = $("#input");
    var $status = $("#status");
    var $content = $("#content");

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.WebSocket) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.onopen  = function(e){
        console.log("Welcome - status "+this.readyState);
        $("#input").prop("disabled", false);
    };

    $input.on("blur", function(e){
        console.log("texto enviado");
        var $texto = $input.val();
        if(!myName)
            myName = $texto;

        socket.send($texto);
        $input.val('');
    });


    socket.onerror  = function(e){ consolo.log("error - status "+this.readyState); };

    socket.onmessage = function(event) {
        var $data = JSON.parse(event.data);
        console.log($data);
        if ($data.type === "color") {
            console.log("tipo dato type");
            $status.text(myName).css('color', $data.data);
        };

        if ($data.type === "history") {
            console.log("tipo dato history");
            //recorrer la lista
            for (var i in $data.data) {
                addMessage($data.data[i].author, $data.data[i].text, $data.data[i].color, new Date($data.data[i].time));
            }
        };
        if ($data.type === "message") {
            console.log("tipo dato message");

            addMessage($data.author, $data.text, $data.color, new Date($data.time));
        };
    };

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        $content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});