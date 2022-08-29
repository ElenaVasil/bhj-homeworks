const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

for (let tab of tabs) {
  tab.onclick = function() {
    let current = document.querySelector('.tab_active');
    //console.log(tabs.indexOf(current))
    tabs[tabs.indexOf(current)].classList.remove('tab_active');
    tab.classList.add('tab_active');
    current = document.querySelector('.tab_active');
    //console.log(tabs.indexOf(current));
    let currentContent = document.querySelector('.tab__content_active');
    //console.log(contents.indexOf(currentContent));
    contents[contents.indexOf(currentContent)].classList.remove('tab__content_active');
    contents[tabs.indexOf(current)].classList.add('tab__content_active');
    }
  }
