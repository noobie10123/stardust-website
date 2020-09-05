var  mn = $(".navbar.navbar-expand-lg");
var  mns = "sticky-top";
var  hdr = $('#header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > (hdr+80) ) {
    mn.addClass(mns);
    mn.css("position","sticky");
  } else {
    mn.removeClass(mns);
  }
});
