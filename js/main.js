var menu = document.getElementById('menu-icon');
var navbar = document.getElementById('navbar');

var toggleMenu = function () {
  navbar.classList.toggle('open');
}

menu.addEventListener('click', toggleMenu)