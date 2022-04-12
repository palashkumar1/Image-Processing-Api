import express, { Response } from 'express';
import router from './routes/index';

const app = express();
const port = 3000;

app.use('/api', router);

app.get('/', (_, res: Response): void => {
  res.status(200).send('Server is working!');
});

app.listen(port, (): void => {
  console.log(`Running on port ${port}`);
});

export default app;
