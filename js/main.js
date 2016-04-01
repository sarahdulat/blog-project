function close_box()
	{
		$('.toaster').slideUp(500), function() {
			$('.toaster').css('display', 'none');
		};
	};

	// TOASTER

	$('div.toaster').delay(3000).slideDown(500);	

	$('.close, #submit').click(function(){
					close_box();
				});

	// SUBMIT

	$('#submit').click(function(){
	alert("Thank you for signing up!");
	return false;
	});

	// BURGER-SHOW

	$('#burger-show').click(function() {
		$('.dropdown').slideToggle(800);
	});

	// BACK TO TOP

			//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
