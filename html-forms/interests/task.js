const checkbox = Array.from(document.querySelectorAll('.interest__check'));
checkbox.forEach(chk => chk.onclick = e => {
  const parentLi = chk.closest('li.interest');
  parentLi.querySelectorAll('ul.interests .interest__check').forEach(childChk => childChk.checked = chk.checked);
})
