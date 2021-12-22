import { getCharData, getCharLikes } from './retrieveApis.js';

export default async () => {
  const charArray = await getCharData();
  const likeArray = await getCharLikes();
  const container = document.querySelector('.cards');
  charArray.forEach((element, index) => {
    container.innerHTML += `
    <div class="card">
    <img class="c-img" src="${element.imageUrl}" alt="character image"/>
    <div class="title-like">
      <h3 class="char-title">${element.name}</h3>
      <i class="far fa-heart"></i>
    </div>
    <p class="likes">${likeArray[index].likes} Likes
    </p>

    <button class="comment-btn" data-id="${index}" type="button">Comment</button>
   </div>
    `;
  });
  const likeButton= document.querySelectorAll('.fa-heart');
  const likeContainer= document.querySelectorAll('.likes');
  likeButton.forEach((element, index)=>{
    const item_id= `item${index}`;
    element.addEventListener('click', async () => {
       await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
    })
  })

  return document.querySelectorAll('.comment-btn');
};
