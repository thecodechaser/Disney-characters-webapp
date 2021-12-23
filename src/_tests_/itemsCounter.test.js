import itemsCounter from '../_mocks_/itemsCounter';

describe('Check Items count number', () => {

    test('if the function actually does the count', async () => {
        const data = await itemsCounter();
        const count = data.length;
      expect(count).toEqual(50);

    });

    test('if the function actually does the count', async () => {
        const data = await itemsCounter();
        const count = data.length;
        expect(count === data.length).toBe(true);
      });

      test('if the function actually does the count', async () => {
        const data = await itemsCounter();
        const count = data.length;
        expect(typeof count).toEqual('number');
      });

      test('if the function actually does the count', async () => {
        const data = await itemsCounter();
        expect(typeof data).toEqual('object');
      });
  });
