const menu = document.querySelector(".nav-bar");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "inline";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
})



