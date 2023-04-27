//faz o menu esconder
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// mostra a lista do menu e oculta quando clicar
const dropdown = document.querySelector('.dropdown');
const menuList = document.querySelector('.menu-list');

let timeout;

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(timeout);
  menuList.classList.add('show-menu');
});

dropdown.addEventListener('mouseleave', () => {
  timeout = setTimeout(() => {
    menuList.classList.remove('show-menu');
  }, 500); // tempo de atraso em milissegundos
});

