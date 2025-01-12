const brendsContainer = document.querySelector('.clients__brends');
const items = document.querySelectorAll('.clients__item');
const totalItems = items.length;

// Устанавливаем количество брендов в CSS-переменной
document.documentElement.style.setProperty('--total-brends', totalItems);

// Клонируем каждый элемент и добавляем его в конец контейнера
items.forEach((item) => {
  const clone = item.cloneNode(true); // Клонируем элемент
  brendsContainer.appendChild(clone); // Добавляем в контейнер
});
