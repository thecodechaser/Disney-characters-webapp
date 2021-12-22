import render from './homePage.js';
import { getCharData } from './retrieveApis.js';

const closePopup = () => {
  const container = document.querySelector('.comment-popup');
  container.style.display = 'none';
};

export default async () => {
  const commentButton = await render();
  const chaArray = await getCharData();
  const container = document.querySelector('.comment-popup');
  commentButton.forEach((element) => {
    const dataID = element.getAttribute('data-id');
    element.addEventListener('click', async () => {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`);
      const comments = await response.json();
      container.innerHTML = `
            <div class="main-popup-container">
            <img class="popup-image" src="${chaArray[dataID].imageUrl}" alt="character-image"/>
            <i class="fas fa-times"></i>
            <h3 class="popup-title">${chaArray[dataID].name}</h3>
            <div class="popup-details">
            <p class="popup-info">Films: ${chaArray[dataID].films.length}</p>
            <p class="popup-info">TV Shows: ${chaArray[dataID].tvShows.length}</p>
            </div>
            <div class="popup-details">
            <p class="popup-info">Video Games: ${chaArray[dataID].videoGames.length}</p>
            <p class="popup-info">Enemies: ${chaArray[dataID].enemies.length}</p>
            </div>
            <div class="comments-container">
            </div>
            </div>
            `;

           

      container.style.display = 'block';

      const closeButton = document.querySelector('.fa-times');
      closeButton.addEventListener('click', closePopup);
    });
  });
};
