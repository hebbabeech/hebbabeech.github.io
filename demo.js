$(function(){

	$('h1').mouseover(function() {
  		$( "h1" ).addClass('makered');
	});
	$('h1').mouseout(function() {
  		$( "h1" ).removeClass('makered');
	});

})