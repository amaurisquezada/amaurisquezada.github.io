$(document).ready(function(){
	function contactSizer(){
		$("#contact-header").css("font-size", $(window).width()/32)
		$("#lightbox-resume").css("height", $("#lightbox-resume").width()*(11/8.5))
		$(".caption-text").css("font-size", $(".method-wrapper").width()/15)
	}
	contactSizer()
	$(window).resize(contactSizer);
	$('.method-wrapper').mouseover(function(){
		$(this).find('.caption').css('display','block');
	});
	$('.method-wrapper').mouseleave(function(){
		$(this).find('.caption').css('display','none');
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