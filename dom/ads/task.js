const rotators = Array.from(document.querySelectorAll('.rotator__case'));
setInterval(()=>{
  let curRot = rotators.findIndex(i=> i === document.querySelector('.rotator__case_active'));
  curRot ++;
  if (curRot === rotators.length) {
    rotators[curRot-1].classList.remove('rotator__case_active');
    curRot = 0;
    rotators[curRot].classList.add('rotator__case_active');
  } else {
    rotators[curRot-1].classList.remove('rotator__case_active');
    rotators[curRot].classList.add('rotator__case_active');
  }
}, 1000);
