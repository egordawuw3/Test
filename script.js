document.addEventListener('DOMContentLoaded', () => {
  // Вкладки
  const tabs = document.querySelectorAll('.tabs li');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      tabs.forEach(t => {
        t.classList.remove('active');
        t.querySelector('a').removeAttribute('aria-selected');
      });
      tab.classList.add('active');
      tab.querySelector('a').setAttribute('aria-selected', 'true');
    });
  });

  // Поиск
  const searchInput = document.querySelector('.search-container input');
  const searchIcon = document.querySelector('.search-container .search-icon');
  const clearIcon = document.querySelector('.search-container .clear-icon');

  searchInput.addEventListener('input', () => {
    if (searchInput.value) {
      clearIcon.style.opacity = 1;
      searchIcon.style.opacity = 0;
      searchInput.placeholder = "Нажмите крестик, чтобы очистить";
    } else {
      clearIcon.style.opacity = 0;
      searchIcon.style.opacity = 1;
      searchInput.placeholder = "Введите название вакансии";
    }
  });

  clearIcon.addEventListener('click', () => {
    searchInput.value = '';
    clearIcon.style.opacity = 0;
    searchIcon.style.opacity = 1;
    searchInput.placeholder = "Введите название вакансии";
  });

  // Фон открывает макет Figma
  const bg = document.querySelector('.background-image');
  bg.addEventListener('click', () => {
    window.open('https://www.figma.com/proto/EGlzmMXltZtGNJ4xGHSJGV/Тест-vsevn.ru?page-id=0%3A1&type=design&node-id=1-2&viewport=217%2C158%2C0.12&t=DMV1i3KIW9EaX6TD-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design', '_blank');
  });
});
