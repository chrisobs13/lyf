// Site Javascripts

$(document).ready(function(){
  
	$('.track-twitter').on('click', function() {
		ga('send', 'event', 'twitter', 'click');
	});

	$('.track-facebook').on('click', function() {
		ga('send', 'event', 'facebook', 'click');
	});

	$('.track-pinterest').on('click', function() {
		ga('send', 'event', 'pinterest', 'click');
	});

	$('.track-instagram').on('click', function() {
		ga('send', 'event', 'instagram', 'click');
	});		

});