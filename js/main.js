// import SimpleLightbox from 'simplelightbox';

// const lightbox = new SimpleLightbox('.gallery a', {
//     captions: true, // Показувати підписи
//     captionsData: 'alt', // Взяти текст з атрибуту alt
//     captionDelay: 250, // Затримка перед показом підпису
//     showCounter: true, // Показувати лічильник зображень
//     nav: true,  // Додаємо кнопки для навігації між зображеннями
//     loop: true  // Можливість безкінечного циклу переходу між зображеннями
// });

// // JavaScript для автоматичної прокрутки галереї
// const gallery = document.querySelector('.gallery');
// const totalImages = document.querySelectorAll('.gallery a').length;

// let currentIndex = 0;

// function slideGallery() {
//     // Зміщення галереї на наступне зображення
//     currentIndex = (currentIndex + 1) % totalImages;  // Перевіряємо, чи це останнє зображення, якщо так - йдемо на перше
//     const offset = -(currentIndex * (1000 + 20)); // Враховуємо ширину зображень і відступи
//     gallery.style.transform = `translateX(${offset}px)`; // Переміщуємо галерею вліво
// }

// // Запускаємо прокручування кожні 3 секунди
// setInterval(slideGallery, 3000);