let interval;
const updateClock = () => {
  const timeField = document.querySelector('.timer__time');
  const deadline = '31 marh 2022';

  const currentDate = new Date().getTime();
  const deadlineDate = new Date(deadline).getTime();
  const timeRemaining = (deadlineDate - currentDate) / 1000;

  //Получаем данные о времени
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  //Добавляем нули, если меньше 10
  const formatTime = time => (time < 10 ? `0${time}` : time);

  //Всталяем значения
  timeField.textContent = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  if (timeRemaining < 0) {
    //Обнуляем значения и очищаем setInterval
    timeField.textContent = `00:00:00:00`;
    clearInterval(interval);
  }
};

interval = setInterval(updateClock, 500);
