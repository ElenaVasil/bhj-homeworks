const menuLink = document.querySelectorAll('.menu__link');
for (let menu of menuLink) {
  menu.onclick = () => {
    /*if (menu.closest('.menu__item').querySelector('.menu_sub').classList.contains('menu_active')) {
      menu.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active')
    }*/
    
    if (menu.closest('.menu__item').querySelector('.menu_sub')) {
      //menu.closest('.menu__item').querySelector('.menu_sub').classList.remove('menu_active');
      menu.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
      return false;
    }
  }
}