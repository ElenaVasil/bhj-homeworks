const editor = document.getElementById('editor');
const btn = document.querySelector('button');


document.addEventListener("DOMContentLoaded", (e) => {
  
  editor.addEventListener('change', (e) => {
    localStorage.setItem('text', editor.value)
  });

  if (localStorage.text !== null) {
    editor.value = localStorage.text;
  }
  
  btn.onclick = () => {
    localStorage.clear();
    editor.value='';
  }
});
