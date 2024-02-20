import { Request, Response } from 'express';
import { resolveIp } from '../../lib/geo-lib-v4';

export const getCityByIp = (req: Request, res: Response) => {
  const ip = req.params.ip;

  if (!ip) {
    throw new Error('Ip not provided');
  }

  const result = resolveIp(ip);
  if (!result) {
    res.send('Not Found');
    return;
  }
  res.send(result);
};
