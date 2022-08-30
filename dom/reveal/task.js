let isInViewport = function(element) {
  const {top, bottom} = element.getBoundingClientRect();
  
  if (bottom >= 0 && top < window.innerHeight) {
    return element.classList.add('reveal_active');
  }
  return element.classList.remove('reveal_active');
};

const reveal = document.querySelectorAll('.reveal');
window.onscroll = function() {
  for (let r of reveal) {
    isInViewport(r);
  }
}
