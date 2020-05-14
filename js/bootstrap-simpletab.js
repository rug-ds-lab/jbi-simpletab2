$( document ).ready(function() {

	$('#menu > ul').addClass('nav');
	$('#menu > ul').addClass('navbar-nav');
	
	$('#menu > ul > li').addClass('nav-item');
	$('#menu > ul > li a').addClass('nav-link');
	$('#menu > ul > li > span > a').parent().parent().addClass('active');
	
	$('#menu > ul > .active').prepend($('#menu > ul > li > span > a'));
	$('#menu > ul > li > span').remove();
	
	$('#menu').removeClass('hidden');
});