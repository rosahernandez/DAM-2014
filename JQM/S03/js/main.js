/*$(function() {
	$("footer").load('include/commonFooter.html');
});*/


$("#index").bind( "pagebeforecreate", function( event ) {
	console.log("pagebeforecreate");
	var htmlFooter = "<h4>This is my footer</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";

	$("footer").html(htmlFooter);

	$("footer").load("include/commonFooter.html", function() {
        console.log("footer included");
        $("footer").trigger("create");
    });

});

$("#index").bind( "pageload", function( event ) {
    console.log("pageloaded");
});