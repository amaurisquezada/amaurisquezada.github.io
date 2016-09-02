$(document).ready(function() {
 function aboutMeSizer(){
		$("#am-image-wrapper").css("height", $("#am-image-wrapper").width())
		$("#am-image-wrapper").css("border-radius", $("#am-image-wrapper").width()/2)
		$("#am-text").css("font-size", $("#am-text-wrapper").width()/24)
	}
	aboutMeSizer()
	$(window).resize(aboutMeSizer);
});