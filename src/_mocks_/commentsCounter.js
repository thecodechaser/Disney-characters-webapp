import fetch from 'cross-fetch';

export default async (dataID) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byg3KtvqOhmd3Xt9Axu5/comments?item_id=item${dataID}');
  const comments = await response.json();
  return comments;
};