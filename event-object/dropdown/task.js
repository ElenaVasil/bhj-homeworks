const list = document.querySelector('.dropdown__list');
const dropdown = document.querySelector('.dropdown__value');
const items = Array.from(document.querySelectorAll('.dropdown__item'));
const value = document.querySelector('.dropdown__value');

dropdown.onclick = function() {
  list.classList.toggle('dropdown__list_active');
}
for (let i of items) {
  i.onclick = function() {
    value.textContent = i.querySelector('.dropdown__link').textContent;
    list.classList.toggle('dropdown__list_active');
    return false;
  }
}
