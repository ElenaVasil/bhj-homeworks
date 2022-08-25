(() => {
let holes = document.getElementsByClassName('hole');
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadValue = Number(dead.textContent);
let lostValue = Number(lost.textContent);

for (let h of holes) {
  h.onclick = () => {
  
  if (h.classList.contains('hole_has-mole')) {
    deadValue++;
    dead.textContent = deadValue;
  } else {
    lostValue++;
    lost.textContent = lostValue;
  }
  if (lostValue === 5) {
    alert('ВЫ ПРОИГРАЛИ(');
    lost.textContent = 0;
    dead.textContent = 0;
    location.reload ();
  }
  if (deadValue === 10) {
    alert('ПОБЕДА!');
    lost.textContent = 0;
    dead.textContent = 0;
    location.reload ();
  }
  }
}
})();