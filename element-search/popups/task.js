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
  
  const crosses = document.querySelectorAll('.modal__close_times');
  for (let cross of crosses) {
    cross.onclick = function() {
      const parent = cross.closest('.modal_active')
      if (parent === modalMain) {
        modalMain.classList.remove('modal_active');
      } else if (parent === modalSuccess) {
        modalSuccess.classList.remove('modal_active');
      }
    }
  }