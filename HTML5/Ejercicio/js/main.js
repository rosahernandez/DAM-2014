$(document).ready(function() {

$(document).on('click', '#localizar', function(event) {
    localizateWithGPS();
});

var db = openDatabase('mydb', '1.0', 'My first database', 2 * 1024 * 1024);
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS players(name, age, description, photo)',[]);
    tx.executeSql('CREATE TABLE IF NOT EXISTS challenges(selected, place, option1, option2)',[]);
    obtDatos();
});
///inserta datos en BD
var getDatos = function(data) {
    $.each(data, function(index) {
        db.transaction(function(tx) {
            var player = data[index];
            console.log(player.name);
            tx.executeSql('INSERT INTO players (name, age, description, photo) VALUES (?, ?, ?, ?)', [player.name, player.age, player.description, player.photo]);
            $.each(player.challenges[], function(index2) {
                var challenge = player.challenges[index2];
                tx.executeSql('INSERT INTO challenges (selected, place, option1, option2) VALUES (?, ?, ?, ?)', [challenge.selected, selected.place, selected.option1, selected.option2]);
            });
        });
    });
};

var obtDatos = function(){
    $.ajax({
        url : 'show.json',
        type : 'GET',
        //data : { user : usuario },
        dataType : 'text',
        cache : false,
        success : function(data){
            getDatos(data)},
        error : function(jqXHR, textStatus, errorThrow){
            console.log(errorThrow);
        }
    });
};

//funciones del localizador
var localizateWithGPS = function() {
    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
        var options = {
            enableHighAccuracy: true,
            timeout: 5000000,
            maximumAge: 0
        };

        navigator.geolocation.watchPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                var accu = position.coords.accuracy;

                var GPS = {
                    'lat': latitude,
                    'lng': longitude
                };
                console.log(GPS);
                console.log("Accuracy: " + accu);

                $('#datos').append('<spam> Posicion: ' + latitude + ' : ' + longitude + ' Precisión: ' + accu + ' m ' + ' Altitud: ' + alt + ' Precisión altitud: ' + altacc + ' Heading: ' + heading + " Velocidad: " + speed + '</spam>');

                showMap(position);
        },
        errorHandler,
        options);
    }

};

function showMap(position) {
    var mapcanvas = document.createElement('div');
    mapcanvas.id = 'mapcanvas';
    mapcanvas.style.height = '400px';
    mapcanvas.style.width = '560px';

    document.querySelector('article').appendChild(mapcanvas);

    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myOptions = {
        zoom: 18,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "¡Usted está aquí!"
    });
}

 var errorHandler = function(err) {
    if (err.code == 1) {
        console.log("Error: Access is denied!");
    } else if (err.code == 2) {
        console.log("Error: Position is unavailable!");
    }
};

});
