const menuBurgerBtn = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');

menuBurgerBtn.addEventListener('click', () => {
  //При клике на бургер меню открывается и закрывается
  menu.classList.toggle('menu-active');
});

window.addEventListener('click', e => {
  //Если клик пришелся не на кнопочку бургер, а ссылкам в меню или за пределами самого меню, то оно закроется
  if (!e.target.closest('.humburger-menu') && (!e.target.closest('menu menu-active') || e.target.closest('.menu-list__link'))) {
    menu.classList.remove('menu-active');
  }
});
