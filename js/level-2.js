jQuery( document ).ready(function() {

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
    'img/level-2/backdrop01.png',
    'img/level-2/acc.png',
    'img/level-2/cat.png',
    'img/level-2/granted.png'
]);

	var i = 1;

	$('.cat').click(function(){
		if (i === 50) {

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