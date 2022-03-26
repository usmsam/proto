const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

//Навешиваем обработчик по клику на каждую кнопку с классом more и удаляем закрывающий класс
modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

//Слушаем сразу всю модалку
modal.addEventListener('click', e => {
  //Если клик пришелся на элемент, родитель которого имеет класс overlay или modal__close, то
  //добавляем закрывающий класс
  if (e.target.closest('.overlay') || e.target.closest('.modal__close')) {
    modal.classList.add('hidden');
  }
});
