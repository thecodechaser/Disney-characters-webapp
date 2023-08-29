import fetch from 'cross-fetch';

export default async () => {
  const response = await fetch('https://api.disneyapi.dev/character');
  const json = await response.json();
  return json.data;
};
