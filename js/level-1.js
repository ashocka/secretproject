jQuery( document ).ready(function() {

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
    'img/level-1/backdrop01.png',
    'img/level-1/gates.png',
    'img/level-1/pad-bg.png',
    'img/level-1/pad-lights_sprite.png',
    'img/level-1/pad-num-00.png',
    'img/level-1/pad-num-01.png',
    'img/level-1/pad-num-02.png',
    'img/level-1/pad-num-03.png',
    'img/level-1/pad-num-04.png',
    'img/level-1/pad-num-05.png',
    'img/level-1/pad-num-06.png',
    'img/level-1/pad-num-07.png',
    'img/level-1/pad-num-08.png',
    'img/level-1/pad-num-09.png',
    'img/level-1/pad-num-ha.png'
]);

	$('.number-pad').hide();
	$('.close').hide();

	$('.gates').click(function(){
		$('.number-pad').show();
		$('.close').show();
	});

		$('.close').click(function(){
			$('.number-pad').hide();
			$('.close').hide();
		});

	

	var i = 1;
	var number = [];

	$('.number').click(function(){

		number.push($(this).data('number'));

		if (i % 4 === 0) { // every fourth click
			num = number.toString();

			if (num === "01,04,00,05") {
				$('.lights').css('background-position', '23px 21px').fadeIn(200).fadeOut(200); // UI feedback

setTimeout(function(){ // create a global function from this
				$('.fade-in').show().animate({
			    	opacity: 1,
			  	}, 1000, function() {});

				setTimeout(function(){
					window.location.href = "level-2.html";
				}, 1000);
}, 1000);
			
			}

			else {
				$('.lights').fadeIn(200).fadeOut(200); // UI feedback
			}

			num.length = 0;
			number.length = 0;
		}

		i++; // count clicks

	});

	

});