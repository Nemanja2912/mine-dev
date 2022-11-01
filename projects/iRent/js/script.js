/* Main BACKGROUND Slider */


$(document).ready(function(){
	$("#background-slider").owlCarousel({
    items: 1,
    loop:true,
      dots:true,
      nav:false,
      autoplay:true,
      autoplayHoverPause:false,
      autoplaySpeed: 10000,
      autoplayTimeout: 5000,  
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      items:1,
      mouseDrag: false,
      touchDrag: false,
     
	});
  });

/* NAVIGATION */

  function openNav() {
    document.getElementById("nav-sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("nav-sidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }


/* TESTIMONIALS */


$(document).ready(function(){
	$("#testimonials").owlCarousel({
    items: 1,
    loop:true,
    dots:false,
    nav:false,
    autoplay:false,
    autoplayHoverPause:false,
    animateOut: '',
    animateIn: '',     
    mouseDrag: true,
    touchDrag: true,
    responsiveClass:true,
    responsive : {
      // breakpoint from 0 up
      992: {
        items: 2,
      }
    }
  	});
  });