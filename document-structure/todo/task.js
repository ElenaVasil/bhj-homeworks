const form = document.getElementById('tasks__form');
const inputTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.onsubmit = () => {
  tasksList.innerHTML += `<div class="task">
    <div class="task__title">` + inputTask.value + `</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;

  form.reset();
  return false;
};
// Почему не работает закомментированный код для удаления задач

/*const tasks = document.querySelectorAll('.task__remove');
for (let task of tasks) {
  task.onclick = () => {
    task.parentElement.remove();
    //task.closest('.task').remove();
  }
}*/

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.target.closest('.task').remove();
  }
});