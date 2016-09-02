$(document).ready(function(){
	function circleSizer(){
		$(".page").css("height", $(".page").width())
		$(".page").css("border-radius", $(".page").width()/2)
	}
	circleSizer()
	$(window).resize(circleSizer);

	$('.page').mouseover(function(){
		$(this).find('.page-description').css('display','inline');
	});

	$('.page').mouseleave(function(){
		$(this).find('.page-description').css('display','none');
	});
})