const links = document.querySelectorAll('.has-tooltip');

for (let link of links) {
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = link.title;
  link.insertAdjacentElement('afterEnd', tooltip);
  let pos;

  link.onclick = () => {
    const tooltipActive = document.querySelector('.tooltip_active');
    if (tooltipActive) {
      if (tooltipActive.textContent === link.title) {
        tooltipActive.classList.remove('tooltip_active')
      } else {
        tooltipActive.classList.remove('tooltip_active');
        tooltip.classList.add('tooltip_active');
      }
    } else {
      tooltip.classList.add('tooltip_active');
    }
    pos = link.getBoundingClientRect();
    tooltip.setAttribute('style', `left: ${pos.left}px; top: ${pos.top + 25}px;`);

    return false;
  };
};