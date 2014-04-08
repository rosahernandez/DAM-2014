$(document).ready(function(){

        var $this = $(this);
        var $contenidos = $this.find('#contenidos');
        var $ticker = $this.find('#ticker');

        var refreshId = setInterval(function(){
            $.get('servidor/generaContenidos.php', { }, function(resp) {
                $contenidos = resp;
                $ticker.css('background-color:red');
                    color : red;
                }
            });
        }, 5000);



        $(document).on('click', '#detener', function(e){
            clearInterval(refreshId);
            $anterior.attr('disabled', 'false');
        }

        $(document).on('click', '#anterior', function(e){

        }

        $(document).on('click', '#siguiente', function(e){

        }



});
