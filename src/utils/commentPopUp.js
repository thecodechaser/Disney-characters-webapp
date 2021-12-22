import render from './homePage.js';
import { getCharData } from './retrieveApis.js';

const closePopup = () => {
  const container = document.querySelector('.comment-popup');
  container.style.display = 'none';
};

export default async () => {
  const commentButton = await render();
  const array = await getCharData();
  const container = document.querySelector('.comment-popup');
  commentButton.forEach((element) => {
    const dataID = element.getAttribute('data-id');
    element.addEventListener('click', () => {
      container.innerHTML = `
            <div class="main-popup-container">
            <img class="popup-image" src="${array[dataID].imageUrl}" alt="character-image"/>
            <i class="fas fa-times"></i>
            <h3 class="popup-title">${array[dataID].name}</h3>
            <div class="popup-details">
            <p class="popup-info">Films: ${array[dataID].films.length}</p>
            <p class="popup-info">TV Shows: ${array[dataID].tvShows.length}</p>
            </div>
            <div class="popup-details">
            <p class="popup-info">Video Games: ${array[dataID].videoGames.length}</p>
            <p class="popup-info">Enemies: ${array[dataID].enemies.length}</p>
            </div>
            </div>
            `;
      container.style.display = 'block';

      const closeButton = document.querySelector('.fa-times');
      closeButton.addEventListener('click', closePopup);
    });
  });
};
