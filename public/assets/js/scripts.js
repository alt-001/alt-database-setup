
$(function(){ 
  
  $('#goup').goup({
    appear: 10,
    scrolltime: 800,
    imgsrc: '/assets/images/goup.jpg',
    width: 45,
    place: 'bottom-right',
    fadein: 500,
    fadeout: 500,
    opacity: 0.8,
    marginX: 2,
    marginY: 7,
  });
});

$(document).on('mouseover', '#vipSidebar li:nth-child(1) a img', function() {
  $("#vipSidebar li:nth-child(1) .name").show();
  $("#vipSidebar li:nth-child(1) .role").show();   
});

$(document).on('mouseover', '#vipSidebar li:nth-child(2) a img', function() {
  $("#vipSidebar li:nth-child(2) .name").show();
  $("#vipSidebar li:nth-child(2) .role").show();
});
$(document).on('mouseover', '#vipSidebar li:nth-child(3) a img', function() {
  $("#vipSidebar li:nth-child(3) .name").show();
  $("#vipSidebar li:nth-child(3) .role").show(); 
});
$(document).on('mouseover', '#vipSidebar li:nth-child(4) a img', function() {
  $("#vipSidebar li:nth-child(4) .name").show();
  $("#vipSidebar li:nth-child(4) .role").show();
});
$(document).on('mouseleave', '#vipSidebar li a img', function() {
  $("#vipSidebar li .name").hide();
  $("#vipSidebar li .role").hide();
});

    