import path from 'path';
import express, { Request, Response } from 'express';
import fs from 'fs';
import imgresize from '../helpers/imgresize';

const imageRouter = express.Router();
//handle /api/images route

imageRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  // check if the query is correct
  if (!filename || !height || !width) {
    res
      .status(400)
      .send(
        'Please make sure url contains correct filename, height and width params',
      );
    return;
  }

  //main file path
  const mainPath = `${path.resolve(
    __dirname,
    `./../../assets/full/${filename}.jpg`,
  )}`;

  //thumb file path
  const thumbPath = `${path.resolve(
    __dirname,
    `./../../assets/thumb/${filename}-${height}x${width}.jpg`,
  )}`;

  if (fs.existsSync(thumbPath)) {
    res.sendFile(thumbPath);
  } else if (fs.existsSync(mainPath) && width !== 0 && height !== 0) {
    try {
      imgresize(width, height, mainPath, thumbPath).then(() => {
        res.status(200).sendFile(thumbPath);
      });
    } catch (error) {
      res.status(500).send('<code style="color:red">an error accured</code>');
      throw error;
    }
  } else {
    res.status(404).send('<h1 style="color:red">not found try again ;)</h1>');
  }
});

export default imageRouter;
