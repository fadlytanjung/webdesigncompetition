$(document).ready(function(){
      
      //Check to see if the window is top if not then display button
      $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
          $('.scrollToTop').fadeIn();
        }
        else {
          $('.scrollToTop').fadeOut();
        }
      });
      
      //Click event to scroll to top
      $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });
      
    }); //script untuk mmenampilkan button scrol up
$(document).ready(function() {
  // navigation scroll
  setInterval(function () {
    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
      $('.cd-nav-trigger').addClass('start');
      $('#mobile-nav .form-inline').css('top','17px');
      $('.bore').css({"border-bottom":"none"});

    } else {
      $('.navbar').removeClass('fixed');
      $('.cd-nav-trigger').removeClass('start');
      $('#mobile-nav .form-inline').css('top','22px');
      $('.bore').css({"border-bottom":"solid 1px rgba(255, 255, 255, 0.2)"});
    }
  }, 100); //script untuk menahan/menggantung navbar menu tetap fixed 

  $("a").on('click', function(event) { //script untuk slow scroll ketika klik menu

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){
          $('nav-link').addClass('active');
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });
});
// menu icon
  $('.cd-nav-trigger').click(function(){ //script mobile menu
	if(!$(this).hasClass('close-nav')){
		$(this).addClass('close-nav');
		$('#mobile-nav').addClass('show');
		$('.body-overlay').addClass('show-nav');
    $('body').css('overflow','hidden');
	} else {
		$(this).removeClass('close-nav');
		$('#mobile-nav').removeClass('show');
		$('.body-overlay').removeClass('show-nav');
    $('body').css('overflow','unset');
	}
	return false;
});

$('#hilang a').click(function(){ //script pilih menu dan hilangkan container mobile
  if(!$('.cd-nav-trigger').hasClass('close-nav')){
    $('.cd-nav-trigger').addClass('close-nav');
    $('#mobile-nav').addClass('show');
    $('.body-overlay').addClass('show-nav');
    $('body').css('overflow','hidden');
  } else {
    $('.cd-nav-trigger').removeClass('close-nav');
    $('#mobile-nav').removeClass('show');
    $('.body-overlay').removeClass('show-nav');
    $('body').css('overflow','unset');
  }
  return false;
});

if ($('.owl-carousel').length > 0) { //scrip carousel in section struktur organisasi
  (function($){
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        lazyLoad:true,
        afterLazyLoad: function(elem){
        $(elem).addClass("border-red");
        },
        dots:false,
        nav:true,
        autoplay:true,
        navText: [
        "<i class='material-icons'>keyboard_arrow_left</i>",
        "<i class='material-icons'>keyboard_arrow_right</i>"
        ],
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:3
          }
        }
      });
    })(jQuery);
}

