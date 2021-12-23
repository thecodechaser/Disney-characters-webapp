import commentsCounter from '../_mocks_/commentsCounter.js';

describe('Check Items count number', () => {
  test('if the function actually does the count', async () => {
    const data = await commentsCounter(25);
    const count = data.length;
    expect(count).toEqual(3);
  });

  test('if the function actually does the count', async () => {
    const data = await commentsCounter(25);
    const count = data.length;
    expect(count === data.length).toBe(true);
  });

  test('if the function actually does the count', async () => {
    const data = await commentsCounter(25);
    const count = data.length;
    expect(typeof count).toEqual('number');
  });

  test('if the function actually does the count', async () => {
    const data = await commentsCounter(25);
    expect(typeof data).toEqual('object');
  });
});
