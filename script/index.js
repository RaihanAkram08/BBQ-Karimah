// Script Burger Menu
function myFunction() {
    var x = document.getElementById("wrap-burger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }

// Slide Show Deskripsi
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


// Script Slide Show Auto
let myIndex = 0;
let captionTextAuto = document.getElementById("caption-auto");

function carousel() {
  let i;
  let mySlides = document.getElementsByClassName("mySlidesAuto");

  for (i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";  
  }
  myIndex++;

  if (myIndex > mySlides.length) {myIndex = 1}    
  mySlides[myIndex-1].style.display = "block";  
  captionTextAuto.innerHTML = mySlides[myIndex-1].alt;
  // setTimeout(carousel, 2000); // Change image every 2 seconds

}

carousel();


// Accordion
var acc = document.getElementsByClassName("accordion");
    var i;
    
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Row Atas Dan Bawah
function rowAccordion() {
    let ArrowDownLine = document.getElementsByClassName("ri-arrow-down-s-line");
    let ArrowUpLine = document.getElementsByClassName("ri-arrow-up-s-line");

    if (ArrowDownLine.style.display === "block" && ArrowUpLine.style.display === "none") {
        ArrowDownLine.style.display === "none" && ArrowUpLine.style.display === "none"
    } else {
        ArrowUpLine.style.display === "block" && ArrowUpLine.style.display === "none"
    }
}