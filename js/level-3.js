jQuery( document ).ready(function() {

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
    'img/level-3/backdrop01.png',
    'img/level-3/backdrop02.png',
    'img/level-3/light.png',
    'img/level-3/safe-01.png',
    'img/level-3/safe-02.png',
    'img/level-3/safe-03.png',
    'img/level-3/safe-04.png',
    'img/level-3/safe-05.png',
    'img/level-1/pad-lights_sprite.png'
]);

	$('.safe-password').hide();
	$('.close').hide();

	var i = 0;
	var lastClick = 0;

	$('.backdrop-02').click(function(){
		$('.light').toggle();

		if (i % 2 === 0){
			// do this when light is on

			$('.safe').css('background-image', 'url(img/level-3/safe-02.png)');
		} else {
			// do this when light is off

			var d = new Date();
			var t = d.getTime();
	    
	        if(t - lastClick > 60000 && lastClick !== 0) { // if light was on for more than 60 sec
	        	$('.safe').css('background-image', 'url(img/level-3/safe-04.png)');

			    $('.safe').click(function(){
			        $('.safe').css('background-image', 'url(img/level-3/safe-05.png)');

			        // FIRST .show() the password input form
				$('.safe').click(function(){
					$('.safe-password').show();
					$('.close').show();
				});

				$('.close').click(function(){
					$('.safe-password').hide();
					$('.close').hide();
				});

				// the password functionality
				$(".password").keyup(function(){
					var inputtedValue = $(this).val();

					if(inputtedValue==="nses" || inputtedValue==="NSES") {

				        $('.lights').css('background-position', '23px 21px'); // UI feedback

				        setTimeout(function(){ // create a global function from this
								$('.fade-in').show().animate({
							    	opacity: 1,
							  	}, 1000, function() {});

								setTimeout(function(){
									window.location.href = "story-ending.html";
								}, 1000);
				}, 1000);
							
							}
				    }); // end password functionality
			    });

			$('.backdrop-02').off(); // do nothing if element is clicked
	            
	        } else {
				$('.safe').css('background-image', 'url(img/level-3/safe-03.png)');

				$('.safe').off(); // do nothing if element is clicked
	        }
	        
	        lastClick = t;
		}

		i++;
	});


});