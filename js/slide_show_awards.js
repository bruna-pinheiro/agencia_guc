// Carousel Premiações
var slideIndexAwards = 1;

var myTimerAwards;

var slideshowContainerAwards;

window.addEventListener("load",function() {
    showSlidesAwards(slideIndexAwards);
    myTimerAwards = setInterval(function(){plusSlidesAwards(1)}, 4000);
  
    slideshowContainerAwards = document.getElementsByClassName('slideshow-inner')[0];

  
    slideshowContainerAwards.addEventListener('mouseenter', pauseAwards)
    slideshowContainerAwards.addEventListener('mouseleave', resumeAwards)
})


function plusSlidesAwards(n){
  clearInterval(myTimerAwards);
  if (n < 0){
    showSlidesAwards(slideIndexAwards -= 1);
  } else {
   showSlidesAwards(slideIndexAwards += 1); 
  }
  
  if (n === -1){
    myTimerAwards = setInterval(function(){plusSlidesAwards(n + 2)}, 4000);
  } else {
    myTimerAwards = setInterval(function(){plusSlidesAwards(n + 1)}, 4000);
  }
}


//Controls the current slide and resets interval
function currentSlideAwards(n){
  clearInterval(myTimerAwards);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndexAwards = n);
}

function showSlidesAwards(n){
  var iAwards;
  var slidesAwards = document.getElementsByClassName("mySlidesAwards");
  var dotsAwards = document.getElementsByClassName("dotAwards");
  if (n > slidesAwards.length) {slideIndexAwards = 1}
  if (n < 1) {slideIndexAwards = slidesAwards.length}
  for (i = 0; i < slidesAwards.length; i++) {
      slidesAwards[i].style.display = "none";
  }
  for (i = 0; i < dotsAwards.length; i++) {
      dotsAwards[i].className = dotsAwards[i].className.replace(" active", "");
  }
  slidesAwards[slideIndexAwards-1].style.display = "block";
  dotsAwards[slideIndexAwards-1].className += " active";
}

pauseAwards = () => {
  clearInterval(myTimerAwards);
}

resumeAwards = () =>{
  clearInterval(myTimerAwards);
  myTimerAwards = setInterval(function(){plusSlidesAwards(slideIndexAwards)}, 4000);
}