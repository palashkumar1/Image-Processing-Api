import express from 'express';
import imageRouter from './imageRouter';
import listImagesRouter from './listImagesRouter';
const router = express.Router();

// router.get('/', (req: express.Request, res: express.Response) => {
//     res.render('index', { title: 'imageResizer' });
// });
router.use('/images', imageRouter);
router.use('/listImages', listImagesRouter);
export default router;
