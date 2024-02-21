import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);

app.use((err: any, req: Request, res: Response, _: NextFunction) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message ?? 'An error occured.',
    errors: err.error ?? [],
  });
  console.error(err);
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

export default app;
