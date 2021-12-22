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
  return document.querySelectorAll('.comment-btn');
};
