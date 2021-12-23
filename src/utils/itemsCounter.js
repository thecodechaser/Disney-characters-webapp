import { getCharData } from './retrieveApis.js';

export default async () => {
  const itemsCounter = await getCharData();
  const characters = document.querySelector('.c-counter');
  characters.innerHTML = `Disney: Characters(${itemsCounter.length})`;
};
