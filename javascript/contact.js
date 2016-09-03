$(document).ready(function(){
	function contactSizer(){
		$("#contact-header").css("font-size", $(window).width()/32)
		$("#lightbox-resume").css("height", $("#lightbox-resume").width()*(11/8.5))
		$(".caption-text").css("font-size", $(".method-wrapper").width()/15)
		$("hgroup h2").css("margin-left", $(window).width()/10 + $("hgroup h1").width())
	}
	contactSizer()
	$(window).resize(contactSizer);
	$('.ct-circle').mouseover(function(){
		$(this).next().css('display','block');
	});
	$('.ct-circle').mouseleave(function(){
		$(this).next().css('display','none');
	});

	$("#resume-wrapper").click(function(){
		$("#lightbox").css("display", "block");
		$("#lightbox-resume").css("display", "block");
	})

	$("#lightbox").click(function(){
		$("#lightbox").css("display", "none");
		$("#lightbox-resume").css("display", "none");
	})

})