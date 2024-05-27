var MenuHamburger = document.getElementById("MenuHamburger");
var menu = document.getElementById("LinkList");

MenuHamburger.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});