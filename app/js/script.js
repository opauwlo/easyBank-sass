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
mobileMenu.addEventListener('click', function () {
  event.preventDefault();
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    
  } else {
    mobileMenu.classList.add('open');

  }
});