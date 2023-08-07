function toggleMenu() {
  const subMenus = document.querySelector('.sub-menus');
  const hamburgerMenu = document.querySelector('.icon-burger');

  if (subMenus.style.maxHeight === '0px' || subMenus.style.maxHeight === '') {
    // Ease-in effect when opening
    subMenus.style.transition = 'max-height 1s ease-in'; // 1-second ease-in
    subMenus.style.maxHeight = '100vh';
  } else {
    // Immediate disappearance when closing
    subMenus.style.transition = 'none'; // No transition
    subMenus.style.maxHeight = '0px';
  }

  hamburgerMenu.classList.toggle('active');
}
