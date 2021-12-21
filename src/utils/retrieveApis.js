export default async () => {
  const response = await fetch('https://api.disneyapi.dev/characters');
  const json = await response.json();
  return json.data;
};
