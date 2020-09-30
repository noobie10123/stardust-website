var  mn = $(".navbar.navbar-expand-lg");
var  mns = "sticky-top";
var  hdr = $('#header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > (hdr+0) ) {
    mn.addClass(mns);
    mn.css("position","sticky");
  } else {
    mn.removeClass(mns);
  }
});
AOS.init();
