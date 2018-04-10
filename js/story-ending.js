jQuery( document ).ready(function() {

	var i = 0;

	$('.character-janitor').hide();
	$('.runt').hide();

	// dialogue functionality
	$('body').click(function(){

// hard-coded narrative
		if (i === 1) {
			$('.character-janitor').show();
		}

		if (i === 8) {
			$('.runt').show();
		}

		if (i === 9) {
			$('.runt').hide();
			$('.character-cam').attr("src", "img/story-ending/cam-r.png");
		}

		if (i === 10) {
			$('.character-cam').animate({
			    left: "-300px",
			  }, 1000, function() {});
		}

		if (i === 11) {
			$('.fade-in').show().animate({
			    opacity: 1,
			  }, 1000, function() {});

			setTimeout(function(){
				window.location.href = "splash.html";
			}, 1000);
			
		}

		else {
			$('.dialogue p.show').removeClass('show').next().addClass('show');
		}
		i++; // count clicks
	});

});