function toggleList(id, element) {
  const allLists = document.querySelectorAll('ul');
  const allArrows = document.querySelectorAll('.arrow');

  const targetList = document.getElementById(id);
  const targetArrow = element.querySelector('.arrow');

  allLists.forEach(list => {
    if (list.id !== id) {
      list.classList.remove('visible');
    }
  });

  allArrows.forEach(arrow => {
    if (arrow !== targetArrow) {
      arrow.classList.remove('rotate');
    }
  });

  targetList.classList.toggle('visible');
  targetArrow.classList.toggle('rotate');
}