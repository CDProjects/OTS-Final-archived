function toggleMenu() {
    const subMenus = document.querySelector('.sub-menus');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    subMenus.style.display = subMenus.style.display === 'none' || subMenus.style.display === '' ? 'block' : 'none';
  
    // Toggle between hamburger and 'X' icon
    hamburgerMenu.innerHTML = subMenus.style.display === 'block' ?
      '<div class="bar" style="transform: rotate(45deg);"></div><div class="bar" style="opacity: 0;"></div><div class="bar" style="transform: rotate(-45deg);"></div>' :
      '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
  }
  