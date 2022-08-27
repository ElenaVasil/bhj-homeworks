(() => {
  const modalMain = document.getElementById('modal_main');
  modalMain.classList.add("modal_active");
  const modalSuccess = document.getElementById('modal_success'); 
  const btnDanger = document.querySelector('.btn_danger');
  btnDanger.onclick = () => {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.remove('modal_active');
  }
  const btnSuccess = document.querySelector('.btn_success');
  btnSuccess.onclick = () => {
    modalSuccess.classList.remove('modal_active');
  }
})();