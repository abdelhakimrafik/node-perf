import { Router } from 'express';
import geoRouter from './geo';

const routes = Router();

routes.use('/geo', geoRouter);

export default routes;
