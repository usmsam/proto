//Находим все ссылки, которорые могут вести на секции
document.querySelectorAll('a[href^="#"]').forEach(link => {
  //Вешаем слушатель на каждую ссылку
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const section = this.getAttribute('href').substring(1);
    //Проверяем не являлся ли атрибту href с # просто заглушкой
    //Если section ==true, тогда ссылка является якорем
    if (section) {
      seamless.scrollIntoView(document.querySelector(`.${section}`), {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  });
});
