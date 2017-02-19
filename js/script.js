//////////////////////paralex effect//////////////////////////////
	var ypos,image;
	function parallex() {
		image = document.getElementById('image');
		ypos = window.pageYOffset;
		image.style.top = ypos * .7+ 'px';
	}
	window.addEventListener('scroll', parallex,false);
///////////////////////end paralex/////////////////////////////////

//////////////////////////scroll to anchor/////////////////////////
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
     //cansel standart link behaviour
        event.preventDefault();
        //select href attribute
        var id  = $(this).attr('href'),
        //selected height from the beginning of the page to the anchored block
            top = $(id).offset().top;
        //animate transition in 1500 ms
        $('body,html').animate({scrollTop: top}, 1500);
    });
})
////////////////////////// END scroll to anchor/////////////////////////

////////////////////////// UP BUTTON //////////////////////////
$(document).ready(function(){
	var scrollUp = document.getElementById('scrollup'); //select element

	scrollUp.addEventListener('mouseover', function() { //add opacity
		scrollUp.style.opacity=0.2;
		scrollUp.style.filter  = 'alpha(opacity=30)';
	}, false)

	scrollUp.addEventListener('mouseout', function() { //remove opacity
		scrollUp.style.opacity = 0.4;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	}, false)

	scrollUp.addEventListener('click', function() { //click event
		window.scrollTo(0,0);
	}, false)
// show button
	window.addEventListener('scroll', function () { //show during scrolling
		if ( (window.pageYOffset > 400)&(window.innerWidth > 568 ) ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	}, false)
})
////////////////////////// END UP //////////////////////////

////////////////////////SCROLL ANIMATION////////////////////////

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('animated');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

////////////////////////SCROLL ANIMATION END ///////////////////////

$(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });
    });