const clicker__counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let value = Number(clicker__counter.textContent);
function funcCount() {
  value++;
  clicker__counter.textContent = value;
}
function funcSize() {
  if (cookie.width === 200) {
    cookie.width = 300;
  } else if (cookie.width === 300) {
    cookie.width = 200;
  }
}
cookie.addEventListener('click', funcCount);
cookie.addEventListener('click', funcSize);