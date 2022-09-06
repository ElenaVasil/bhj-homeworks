const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  if (document.cookie === '') {
    modal.classList.add('modal_active');
  }
});

close.onclick = () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClose=true';
};