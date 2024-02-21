import { Router } from 'express';
import { getCityByIpV1 } from './geo/geo-v1';
import { getCityByIpV2 } from './geo/geo-v2';
import { getCityByIpV3 } from './geo/geo-v3';

const perRouter = Router();

/** Geo routes */
perRouter.get('/geo/v1/:ip/', getCityByIpV1);
perRouter.get('/geo/v2/:ip/', getCityByIpV2);
perRouter.get('/geo/v3/:ip/', getCityByIpV3);

export default perRouter;
