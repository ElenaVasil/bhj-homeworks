const form = document.getElementById('tasks__form');
const inputTask = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.onsubmit = () => {
  if (inputTask.value.trim()!=='') {
    tasksList.innerHTML += `<div class="task">
    <div class="task__title">` + inputTask.value + `</div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;
  }
  
  form.reset();
  return false;
};

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.target.closest('.task').remove();
  }
});