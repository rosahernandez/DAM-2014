/*$(function() {
	$("footer").load('include/commonFooter.html');
});*/

//$("#index, #page2-view1, #page2-view2").bind( "pagebeforecreate", function( event ) {

$("#index").bind( "pagebeforecreate", function( event ) {
	console.log("pagebeforecreate");
});

$("#index").bind( "pagebeforeload", function( event ) {
	console.log("pagebeforeload");
});

$("#index").bind( "pagecreate", function( event ) {
	console.log("pagecreate");
});

$("#index").bind( "pageinit", function( event ) {
	console.log("pageinit");
	$("#mypopup").popup("open");
});

$("#index").bind( "pagechange", function( event ) {
	console.log("pagechange");
});

$("#index").bind( "pagebeforeshow", function( event ) {
	console.log("pagebeforeshow");
});

$("#index").bind( "pageshow", function( event ) {
	console.log("pageshow");
});

$("#index").bind( "pagehide", function( event ) {
	console.log("pagehide");
});

$("#index").bind( "orientationchange", function( event ) {
	console.log("orientationchange");
	$("#mypopup").popup("open");
});

	/*
	var htmlFooter = "<h4>This is my footer</h4>"+/*
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";*/
	/*
	$("footer").html(htmlFooter, function() {
		$("footer").trigger("updatelayout");
	});*/
/*
	$("footer").load("include/commonFooter.html", function () {
		$("footer").trigger("create");
	});

});*/