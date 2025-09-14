// Вкладки
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => { t.setAttribute('aria-selected','false'); t.classList.remove('active'); });
        tab.setAttribute('aria-selected','true');
        tab.classList.add('active');
    });
});

// Поиск
const searchInput = document.querySelector('.search-field');
const searchIcon = document.querySelector('.search-icon');
const clearIcon = document.querySelector('.clear-icon');

searchInput.addEventListener('input', () => {
    if(searchInput.value){
        searchIcon.style.display = 'none';
        clearIcon.style.display = 'block';
    } else {
        searchIcon.style.display = 'block';
        clearIcon.style.display = 'none';
    }
});

clearIcon.addEventListener('click', () => {
    searchInput.value = '';
    searchIcon.style.display = 'block';
    clearIcon.style.display = 'none';
});

// Фоновая картинка
const backgroundImage = document.querySelector('.background-image');
backgroundImage.addEventListener('click', () => {
    window.open('assets/images/background.jpg','_blank');
});

// Селект подсветка
const citySelect = document.querySelector('.city-select');
citySelect.addEventListener('change', () => {
    citySelect.style.backgroundColor = '#0087FC';
    citySelect.style.color = '#fff';
});
