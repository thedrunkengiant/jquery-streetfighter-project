$(document).ready(function(){

	$('.ryu').mouseenter(function() {
   	$('.ryu-still').hide();
	$('.ryu-ready').show();
  })

	.mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  })

	.mousedown(function() {
		playHadouken();
    $('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '520px');
  }
);
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
  	$('.ryu-throwing').hide();
    $('.ryu-ready').show();
})


    $('html').keydown(function( event ) {
  if ( event.which == 88 ) {
     $('.ryu-throwing').hide();
  	$('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }

  })

   $('html').keyup(function()  {
  	$('.ryu-throwing').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();

  })


    // ryu goes back to his ready position
});
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

