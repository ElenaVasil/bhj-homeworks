(() => {
  const menuLink = document.querySelectorAll('.menu__link');
  function closeMenu() {
    const menuActive = document.querySelectorAll('.menu_active');
    menuActive.forEach((menu)=> {
      menu.classList.remove('menu_active');
    });
  }

  for (let menu of menuLink) {
    menu.onclick = () => {
      closeMenu();
      if (menu.nextElementSibling !== null) {
        menu.nextElementSibling.classList.toggle('menu_active');
        return false;
      } 
    }
  }
})();