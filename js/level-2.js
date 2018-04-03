jQuery( document ).ready(function() {

	var i = 1;

	$('.cat').click(function(){
		if (i === 10) {

			$(this).animate({
			    left: "900px",
			  }, 2000, function() {});

		} // end if

		i++;
	});

	$('.access-card').click(function(){
			$('.access-granted').show();
			
			setTimeout(function(){ // create a global function from this
				$('.fade-in').show().animate({
			    	opacity: 1,
			  	}, 1000, function() {});

				setTimeout(function(){
					window.location.href = "level-3.html";
				}, 1000);
			}, 1000);
		});

});