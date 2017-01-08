$(function () {

	$(window).stellar({
		horizontalScrolling: true 
	});

	// Custom Scrollbar
	var nice = $("html").niceScroll({
		cursorcolor: "#9d9d9d",
		cursorwidth: 8,
		cursorborder: "0px solid #fff",
		cursorborderradius: '5px'

	});

	
	$('.main-nav a:not(.dropdown-toggle)').bind('click', function(event) {
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});
	
    function home_height () {
		var element = $('.st-home-unit'),
			elemHeight = element.height(),
			winHeight = $(window).height()
			padding = (winHeight - elemHeight - 200) /5;

		if (padding < 1 ) {
			padding = 0;
		};
		element.css('padding', padding+'px 0');
	}
	home_height ();

	$(window).resize(function () {
		home_height ();
	});


	var fadeStart=$(window).height()/3 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=$(window).height() // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.st-home-unit')
	;

	$(window).bind('scroll', function(){
	    var offset = $(document).scrollTop()
	        ,opacity=0
	    ;
	    if( offset<=fadeStart ){
	        opacity=1;
	    }else if( offset<=fadeUntil ){
	        opacity=1-offset/fadeUntil;
	    }
	    fading.css({'opacity': opacity});

	    if (offset >= 120) {
	    	$('.navbar-default').addClass("nav-navbar-alt");
	    } else if (offset <= 119) {
	    	$('.navbar-default').removeClass("nav-navbar-alt");
	    }
	});

	$(".exmp-carousel ul").owlCarousel({
        items: 1,
        navigation: false,
        pagination: true,
        singleItem:true,
        autoPlay: true,
        transitionStyle: "backSlide"
    });	
});