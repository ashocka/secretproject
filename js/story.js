jQuery( document ).ready(function() {

	/*$('.fade-in').animate({
		 opacity: 1,
	}, 1000, function() {}).delay(200);*/

	var i = 0;

	// dialogue functionality
	$('body').click(function(){

// hard-coded narrative
		if (i === 3) {
			$('.character-cam').animate({
			    left: "200px",
			  }, 1000, function() {
			  	$(this).hide();
			  });
		}

		if (i === 4) {
			$('.character-cam').attr("src", "img/story-beginning/cam-d.png");
			$('.character-cam').show();
			$('.character-cam').animate({
			    left: "300px",
			  }, 1000, function() {});
		}

		if (i === 5) {
			$('.character-clerk').attr("src", "img/story-beginning/clerk-p.png");
		}

		/*if (i === 1) {
			$(this).animate({
			    background-color: "#000000",
			  }, 2000, function() {});
		}*/

		if (i === 6) {
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