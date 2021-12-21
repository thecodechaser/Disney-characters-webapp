import { getCharData } from './retrieveApis.js';

const render = async () => {
  const array = await getCharData();
  const ab = document.querySelector('.char-title');
  ab.innerHTML = `${array[0].name}`;
};

export { render };
