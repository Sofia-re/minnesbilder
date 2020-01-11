$(function() {
	
	$("#title2").hide();
	$("#title4").hide();
	
});


$(document).ready(function() {
	
	$("#title1").click(function() {
        $("#title1").toggle();
        $("#title2").toggle();
		
    });	
	$("#title2").click(function() {
        $("#title2").toggle();
        $("#title1").toggle();
		
    });	
	
		$("#title3").click(function() {
        $("#title3").toggle();
        $("#title4").toggle();
		
    });	
	$("#title4").click(function() {
        $("#title4").toggle();
        $("#title3").toggle();
		
    });	
	
});	