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