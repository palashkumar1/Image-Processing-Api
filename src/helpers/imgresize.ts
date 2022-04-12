/* eslint-disable @typescript-eslint/explicit-function-return-type */
import sharp from 'sharp';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function imgresize(
  width: number,
  height: number,
  mainPath: string,
  thumbPath: string,
) {
  return sharp(mainPath).resize(width, height).toFile(thumbPath);
}
export default imgresize;
