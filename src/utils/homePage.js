import { getCharData, getCharLikes } from './retrieveApis.js';

export default async () => {
  const charArray = await getCharData();
  let likeArray = await getCharLikes();
  const container = document.querySelector('.cards');
  charArray.forEach((element, index) => {
    const title = element.name.substring(0, 15);
    container.innerHTML += `
    <div class="card">
    <img class="c-img" src="${element.imageUrl}" alt="character image"/>
    <div class="title-like">
      <h3 class="char-title">${title}</h3>
      <i class="far fa-heart"></i>
    </div>
    <p class="likes">${likeArray[index].likes} Likes
    </p>

    <button class="comment-btn" data-id="${index}" type="button">Comment</button>
   </div>
    `;
  });
  const likeButton = document.querySelectorAll('.fa-heart');
  const likeContainer = document.querySelectorAll('.likes');
  likeButton.forEach((element, index) => {
    element.addEventListener('click', async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes', {
        method: 'POST',
        body: JSON.stringify({
          item_id: `item${index}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      likeArray = await getCharLikes();
      likeContainer[index].innerHTML = `${likeArray[index].likes} Likes`;
    });
  });

  return document.querySelectorAll('.comment-btn');
};
