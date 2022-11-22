(function($){
	'use strict';


// menu

$('.veer-menu-icon i.fa-bars').on('click', function(){
	$('.veer-menu').slideDown();
	$(this).hide();
	$('.veer-menu-icon i.fa-times').show();
});

$('.veer-menu-icon i.fa-times').on('click', function(){
	$('.veer-menu').slideUp();
	$(this).hide();
	$('.veer-menu-icon i.fa-bars').show();
});

$(window).resize( function(){

	var screenSize = $(window).width();

	if ( screenSize > 991 ) {
		$('.veer-menu').removeAttr('style');
	}

} )


// Venobox

new VenoBox();

// isotope

$(document).ready(function ($) {
setTimeout(function(){ 
          // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
});
     }, 1000);
});


// work button 
$('.veer-work-btn button').on('click', function(){
	$('.veer-work-btn button').removeClass('active');
	$(this).addClass('active');
})


// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




}) (jQuery);
