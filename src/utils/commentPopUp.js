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
      let response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}`);
      let comments = await response.json();
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
            <h3 class="comment-heading">Comments</h3>
            <div class="comments-container">
            </div>
            <h3 class="add-comment">Add a comment</3>
            <form class="comment-form">
            <input type="text" required name"name" placeholder="Your name">
            <input type="text" required name="comment" placeholder="Your insights">
            <button type="submit" class="submit-comment">Comment</button>
            </form>
            </div>
            `;

      const commentsContainer = document.querySelector('.comments-container');
      comments.forEach((element) => {
        commentsContainer.innerHTML += `
              <div class="comment"><p class="comment-date">${element.creation_date}</p>
              <p class="comment-user-name">${element.username}:</p>
              <p class="comment-value">${element.comment}</p>
              </div>`;
      });

      const form = document.querySelector('.comment-form');
      form.addEventListener('submit', async (event) => {
        const UserName = form.elements[0].value;
        const UserComment = form.elements[1].value;
        event.preventDefault();
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments', {
        method: 'POST',
        body: JSON.stringify({
          item_id: `item${dataID}`,
          username: UserName,
          comment: UserComment
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
     
      form.reset();
      })

      container.style.display = 'block';

      const closeButton = document.querySelector('.fa-times');
      closeButton.addEventListener('click', closePopup);
    });
  });
};
