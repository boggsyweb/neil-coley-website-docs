const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.querySelector("aside");
const mainContent = document.querySelector("main");

// changes menu button color
const menuIcons = document.querySelectorAll(".menu-icon");
const originalMenuIconColor = "#B59C63";
const openedMenuIconColor = "#292A36";
const setMenuIconColor = (color) => {
  menuIcons.forEach((icon) => {
    icon.style.stroke = color;
  });
};

// side-push/top-push menu function
const toggleSideMenu = () => {
  const isOpen = menuToggle.checked;
  sideMenu.classList.toggle("open", isOpen);
  mainContent.classList.toggle("open", isOpen);
  setMenuIconColor(isOpen ? openedMenuIconColor : originalMenuIconColor);
};

menuToggle.addEventListener("change", toggleSideMenu);


// scroll animation
function reveal() {
  const reveals = document.querySelectorAll(".instruction-box");

  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  for (const element of reveals) {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// automatically updates year in footer
let date = (new Date()).getFullYear()
document.getElementById('year').textContent = date