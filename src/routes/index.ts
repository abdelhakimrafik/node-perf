import { Router } from 'express';
import perRouter from './perf';
import memoRouter from './memory-leak';

const routes = Router();

routes.use('/perf', perRouter);
routes.use('/memo', memoRouter);

export default routes;
