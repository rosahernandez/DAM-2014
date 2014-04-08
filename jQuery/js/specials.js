$(function(){
    $(document).on('change', 'select[name=day]', function(e){
           var $this = $(this);
            console.log($this.val());
            $.ajax({
                url : 'data/specials.json',
                data :  { data : $this.val()},
                dataTyoe : 'json',
                cache : 'false',
                sucess : function(data, textStatus, jqXHR){
                    console.log(data);
                },
                error : function(jqXHR, textStatus, errorThrown){
                    console.log(errorThrown);
                }
            });
    });
});
