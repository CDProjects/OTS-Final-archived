function toggleMenu() {
  const subMenus = document.querySelector('.sub-menus');
  const hamburgerMenu = document.querySelector('.icon-burger');

  subMenus.style.display = subMenus.style.display === 'none' || subMenus.style.display === '' ? 'block' : 'none';
  hamburgerMenu.classList.toggle('active');
}
