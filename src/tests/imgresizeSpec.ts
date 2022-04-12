import path from 'path';
import imgresize from '../helpers/imgresize';

const filePathFullImage = path.resolve(
  __dirname,
  './../../assets/full/fjord.jpg',
);
const filePathThumbImage = path.resolve(
  __dirname,
  './../../assets/thumb/fjord.jpg',
);

describe('The imgresize function', (): void => {
  it('rejects promise if something went wrong', async (): Promise<void> => {
    await expectAsync(
      imgresize(100, 150, filePathFullImage, filePathThumbImage),
    ).toBeRejected();
  });
});
