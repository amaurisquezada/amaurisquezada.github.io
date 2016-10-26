$(document).ready(function(){
  var video = $('.nsb-vid')[0]; 
  var videoJ = $('.nsb-vid');        
  videoJ.on('ended',function(){
    video.autoplay = false;
    video.load();     
  });
})