// prevent zooming & scrolling
$(document).ready(function() {
	$(document).keydown(function(event) {
	if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
	        event.preventDefault();
	     }
	    // 107 Num Key  +
	    // 109 Num Key  -
	    // 173 Min Key  hyphen/underscor Hey
	    // 61 Plus key  +/= key
	});
	$(window).bind('mousewheel DOMMouseScroll', function (event) {
	       if (event.ctrlKey == true) {
	       event.preventDefault();
	       }
	});
});

//navigation button
$(document).ready(function() {
	$('.log-in').mouseover(function() {
	  $('.log-in-logo').removeClass('log-in-logo-mouseleave');
	  $('.log-in-logo').addClass('log-in-logo-mouseover');
	});
	$('.log-in').mouseout(function() {
	  $('.log-in-logo').removeClass('log-in-logo-mouseover');
	  $('.log-in-logo').addClass('log-in-logo-mouseleave');
	});
});

//Navigation main
$(document).ready(function() {
  var WIND_HEIGHT = $(window).height()*0.85||300; 
  $(window).scroll(function () {
    if ($(window).scrollTop() > WIND_HEIGHT) {
      $('div.navigation-desktop').addClass("block");
    }
    if ($(window).scrollTop() < WIND_HEIGHT) {
      $('div.navigation-desktop').removeClass('block');
    }
  });
});

//radio iframes
$(document).ready(function(){
	$('form.mc-form input').click(function(){
		var iframe_id = $(this).attr('data-tab');		
		$('iframe.iframe-tab').removeClass('current-frame');
		$("#"+iframe_id).addClass('current-frame');
	});
});

//button to partnership
$(document).ready(function(){
	$('button.view-coffee').click(function(){
		window.location = 'html/coffee.html' ;
	});
});

//button to partnership
$(document).ready(function(){
	$('button.main-block-button').click(function(){
		window.location = 'html/partnership.html' ;
	});
});

//TABS
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

//SOCIALS
$(document).ready(function(){	
	$("a.share").click(function(event){
		event.preventDefault();
		$(this).parent("div.news-socials").find("div.socials-block").toggleClass("socials-block-click");
		$(this).toggleClass("share-click");
	});
});

//ZOOM IMG
$(document).ready(function(){	
	$("span.zoom").click(function(event){
		event.preventDefault();
		$(this).toggleClass("zoom-in");
		$(this).toggleClass("zoom-out");
		$('img.zoom-img').toggleClass('unzoom-img-style');
		$('img.zoom-img').toggleClass('zoom-img-style');
		$('span.img-shadow').toggleClass('img-shadow-style');
	});
});

//TOGGLE
$(document).ready(function(){	
	$( "a.link1" ).click(function(e) {
		e.preventDefault()
		$( "div.toggle-down1" ).toggle();
		$(this).find('span.arrow-down').toggleClass('arrow-reverse');
	});
});

$(document).ready(function(){	
	$( "a.link2" ).click(function(e) {
		e.preventDefault()
		$( "div.toggle-down2" ).toggle();
		$(this).find('span.arrow-down').toggleClass('arrow-reverse');
	});
});

// M O D A L S
$(document).ready(function(){	
		// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;  
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	function disableScroll() {
	  if (window.addEventListener) // older FF
	  	window.addEventListener('DOMMouseScroll', preventDefault, false);
	  window.onwheel = preventDefault; // modern standard
	  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	  window.ontouchmove  = preventDefault; // mobile
	  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
		window.onmousewheel = document.onmousewheel = null; 
		window.onwheel = null; 
		window.ontouchmove = null;  
		document.onkeydown = null;  
	}

	$( "#login" ).click(function(e) {
		e.preventDefault();
		$( "div.shadow-wrapper" ).addClass('block');
		$( "#login-modal" ).addClass('block');
		$('body').addClass('modal-open');
		disableScroll();
	});

	$( "#close-login" ).click(function(e) {
		e.preventDefault();
		$( "div.shadow-wrapper" ).removeClass('block');
		$( "#login-modal" ).removeClass('block');
		$('body').removeClass('modal-open');
		enableScroll();
	});
	
	$( "#forgot-password" ).click(function(e) {
		e.preventDefault();
		$( "#login-modal" ).removeClass('block');
		$( "#send-modal" ).addClass('block');
	});

	$( "#close-send" ).click(function(e) {
		e.preventDefault();
		$( "div.shadow-wrapper" ).removeClass('block');
		$( "#send-modal" ).removeClass('block');
		$('body').removeClass('modal-open');
		enableScroll();
	});

	$( "#back-login" ).click(function(e) {
		e.preventDefault();
		$("#send-modal").removeClass('block');
		$("#login-modal").addClass('block');
	});

	$( "#btn-login" ).click(function(e) {
		e.preventDefault();
		$('#login').attr("id", "log-out").off('click');
		$('#log-in-scroll').attr("id", "log-out-scroll").off('click'); 
		$( "span.log-in-text" ).html('Logout');
		$( "#login-modal" ).removeClass('block');
		$('body').removeClass('modal-open');
		$( "div.shadow-wrapper" ).removeClass('block');
		enableScroll();
	});

	$(document).on('click', '#log-out', function(e) {
		e.preventDefault();
		$( "div.shadow-wrapper" ).addClass('block');
		$( "#logout-modal" ).addClass('block');
		$('body').addClass('modal-open');
		disableScroll();
	 });

	$( "#btn-yes" ).click(function(e) {
		e.preventDefault();
		location.reload();
	});

	$( "#btn-no" ).click(function(e) {
		e.preventDefault();
		$( "div.shadow-wrapper" ).removeClass('block');
		$( "#logout-modal" ).removeClass('block');
		$('body').removeClass('modal-open');
		enableScroll();
	});

	$( "#log-in-scroll" ).click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: $(document).height() },800		);
		$( "#login-modal" ).addClass('block');
		$( "div.shadow-wrapper" ).addClass('block');
		$('body').addClass('modal-open');
		disableScroll();
	});

	$(document).on('click', '#log-out-scroll', function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: $(document).height() },800);
		$( "div.shadow-wrapper" ).addClass('block');
		$( "#logout-modal" ).addClass('block');
		$('body').addClass('modal-open');
		disableScroll();
	 });
});

//FORM COUNTER
$(document).ready(function() {
	$('.materialize-textarea').keyup(function() {
	  var length = $(this).val().length;
	  $('.counter-current-number').text(length);
	});
});

//FORM NUMBERS of SYMBOLS
$(document).ready(function() {
	var pastValue, pastSelectionStart, pastSelectionEnd;
	$("#number").on("keydown", function() {
	    pastValue          = this.value;
	    pastSelectionStart = this.selectionStart;
	    pastSelectionEnd   = this.selectionEnd;
	}).on("input propertychange", function() {
	    var regex = /^[0-9]+\.?[0-9]*$/;
						
	    if (this.value.length > 0 && !regex.test(this.value)) {
	        this.value          = pastValue;
	        this.selectionStart = pastSelectionStart;
	        this.selectionEnd   = pastSelectionEnd;
	    }
	});
});








