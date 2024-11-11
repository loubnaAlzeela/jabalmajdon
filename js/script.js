const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}




var count = document.getElementsByClassName("count");
  var inc = [];
  function intervalFunc(){
    for(let i =0 ; i < count.length; i++){
      inc.push(1);
      
      if(inc[i] != count[i].getAttribute("max-data")){
        inc[i]++;
      }
      count[i].innerHTML = inc[i];

    }

  }

 var main=document.getElementById("main");
 window.onscroll = function(){
   var timer = setInterval(() => {

    var topElem = main.offsetTop;
    var btmelem= main.offsetTop + main.clientHeight;
    var topScreen = window.scrollY;
    var btmScreen= window.scrollY + window.innerHeight;
    if(btmScreen > topElem && topScreen < btmelem){
      intervalFunc();
    }else{
      clearInterval(timer);
      for( let i=0 ; i < count.length ; i++){
        count[i].innerHTML = 1 ;
        inc= [];
      }
    }

  },10 );
  
  
 }


 var slideshow1 = document.getElementById("slideshow1");
 slideshow1.currentSlideIndex = 1;
 showSlides(slideshow1.currentSlideIndex, slideshow1);
 
 var slideshow2 = document.getElementById("slideshow2");
 slideshow2.currentSlideIndex = 1;
 showSlides(slideshow2.currentSlideIndex, slideshow2);
 
 var slideshow3 = document.getElementById("slideshow3");
 slideshow3.currentSlideIndex = 1;
 showSlides(slideshow3.currentSlideIndex, slideshow3);
 
 function plusSlides(n, slideshow) {
   showSlides(slideshow.currentSlideIndex += n, slideshow);
 }
 
 function currentSlide(n, slideshow) {
   showSlides(slideshow.currentSlideIndex = n, slideshow);
 }
 
 function showSlides(n, slideshow) {
   
 
 
   var i;
   var slides = slideshow.getElementsByClassName("mySlides");
   var dots = slideshow.getElementsByClassName("dot");
   if (n > slides.length) {slideshow.currentSlideIndex = 1}    
   if (n < 1) {slideshow.currentSlideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideshow.currentSlideIndex-1].style.display = "block";  
   dots[slideshow.currentSlideIndex-1].className += " active";
  
 }



function ShowAndHide(service) {
 ;

  var sections = document.querySelectorAll('.slideshow-container');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });

  // Show the selected section
  var x = document.getElementById(service);

  if (x.style.display == 'none') {
      x.style.display = 'block';
      x.focus();
  } else {
      x.style.display = 'none';
  }
}



let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}
