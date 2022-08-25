const timer = document.getElementById("timer");
const value = Number(timer.textContent);
for(let i = value; i > 0; i--) {
  let valueNew = value - 1;
  const id = setInterval(()=>{
    if (valueNew <=0) {
    clearInterval(id);
    alert('Вы победили в конкурсе!');
  };
    timer.textContent = valueNew;
    valueNew--;
  }, 1000);
}