

	// Open/close navigation when clicked .nav-icon
	$(document).ready(function(){
		$('.nav-icon').click(function(){
         $('.nav-icon').toggleClass('active');
			$("nav").toggleClass('active');
			$("main").toggleClass('active');
		});
		$('.black-overlay').click(function(){
         $('.nav-icon').removeClass('active');
			$("nav").removeClass('active');
			$("main").removeClass('active');
		});
		
  });


	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		 if ($(this).scrollTop() > 70) {
			  $('main').addClass('scrolled');
		 } else {
			  $('main').removeClass('scrolled');
		 }
	});
