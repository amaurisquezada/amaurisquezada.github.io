$(document).ready(function(){
	function projectSizer(){
		$(".pt-circle").css("height", $(".pt-circle").width())
		$(".pt-circle").css("border-radius", $(".pt-circle").width()/2)
		$(".pt-circle").css("border-width", $(".pt-circle").width()/32)
		$(".pt-text").css("height", $(".pt-circle").width())
		$("#nsb-text p").css("font-size", $(".pt-text").width()/28)
		$("#insta-text p").css("font-size", $(".pt-text").width()/32)
		$("#jukebox-text p").css("font-size", $(".pt-text").width()/32)
		$(".p-titles").css("font-size", $(".pt-circle").width()/12)
	}
	projectSizer()
	$(window).resize(projectSizer);

	$('.pt-circle').mouseover(function(){
		$(this).find('.p-titles').css('display','block');
	});

	$('.pt-circle').mouseleave(function(){
		$(this).find('.p-titles').css('display','none');
	});
})