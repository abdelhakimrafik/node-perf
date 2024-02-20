import { Router } from 'express';
import { getCityByIp } from './geo';

const geoRouter = Router();

geoRouter.get('/:ip', getCityByIp);

export default geoRouter;
