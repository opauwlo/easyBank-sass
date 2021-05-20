// Switch Themes
const themeMap = {
  dark: "light",
  light: "dark"
};

const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;

// hamburguer menu 
const mobileMenu = document.querySelector('#mobileMenu');
const bodyHi = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
mobileMenu.addEventListener('click', function () {
  event.preventDefault();
  if (header.classList.contains('open')) {
    bodyHi.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');

    });
    
  } else {
    header.classList.add('open');
    bodyHi.classList.add('noscroll');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');

    });
  }
});