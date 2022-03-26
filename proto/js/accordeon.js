const spoilersBtn = document.querySelectorAll('.feature__link');
const spoilersBody = document.querySelectorAll('.feature-sub');

spoilersBtn.forEach(button => {
  button.addEventListener('click', e => {
    //Закрываем все выпадающие списки спойлеров
    spoilersBody.forEach(list => {
      list.classList.add('hidden');
      list.previousElementSibling.classList.add('feature__link_active');
    });

    //Добавляем активынй класс на кликнутую кнопку и соседкский элемент
    button.classList.toggle('feature__link_active');
    button.nextElementSibling.classList.toggle('hidden');
  });
});
