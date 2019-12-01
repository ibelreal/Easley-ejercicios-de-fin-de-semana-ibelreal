'use strict';
let htmlContent = '';
const news = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

const newsUl = document.querySelector('.js-news');
function fillForm() {
  for (let i = 0; i < news.length; i++) {
    htmlContent += '<li class="news__item">';
    htmlContent += `<h2 class="news__title">${news[i].title}</h2>`;
    htmlContent += `<img class="news__image" src="${news[i].image}" alt="${news[i].title}">`;
    htmlContent += '</li>';
  }
  newsUl.innerHTML = htmlContent;
}
fillForm();