function mobileMenu() {
  var navbar = document.getElementById("navID");
  var extraMenu = document.getElementById("exMenu");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    extraMenu.style.display = "none";
  } else {
    navbar.style.display = "block";
    extraMenu.style.display = "block";
  }
}
function desktopMenu() {
  var moreButt = document.getElementById("moreButton");
  var extraMenu = document.getElementById("exMenu");
  if (extraMenu.style.display === "block") {
    extraMenu.style.display = "none";
    moreButt.innerHTML="More &#9654;";
  } else {
    extraMenu.style.display = "block";
    moreButt.innerHTML="Less &#9660;";
  }
}
