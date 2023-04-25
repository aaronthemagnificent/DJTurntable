function menu(x)
{
  x.classList.toggle("change");
}

function navButton(x)
{
  if(x.classList.contains("change"))
  {
    closeNav();
    menu(x);
    x.classList.remove("change");
  }
  else
  {
    openNav();
    menu(x);
    x.classList.add("change");
  }
}

function openNav()
{
  if (window.matchMedia("(max-width: 960px)"))
  {
    document.getElementById("mySidenav").style.width = "350px";
    //document.getElementById("main").style.marginLeft = "300px";
  }
  else
  {
    document.getElementById("mySidenav").style.width = "100%";
  }
}

function closeNav()
{
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropOpen() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function dropOpenEvents() {
  document.getElementById("myDropdownEvents").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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