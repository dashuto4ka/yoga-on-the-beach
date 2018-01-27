// JQUERY

jQuery(document).ready(function() {

    // MENU 

    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });

    // HEARTBEAT

    $('.heartbeat').mouseover(function() {
    $(this).find('h1').css('color', '#f265a2');
    $(this).find('i').css('color', '#f265a2').addClass('animation');
  });

  $('.heartbeat').mouseout(function() {
    $(this).find('h1').css('color', '#331e44');
    $(this).find('i').css('color', '#331e44').removeClass('animation');
  });

});


	// COUNTDOWN CLOCK

	var countDownDate = new Date("Jun 21, 2018 00:00:00").getTime();
  var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d   " + hours + "h   " + minutes + "m   " + seconds + "s   ";

    if (distance < 0) {
    	clearInterval(x);
    	document.getElementById("demo").innerHTML = "Happy International Yoga Day";
        }
    }, 1000);

  // GO TO TOP

	function scrollWin (x, y) {
		window.scrollBy(x, y)
	}

	// GALLERY PAGE

	function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

