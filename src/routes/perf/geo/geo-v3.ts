import { Request, Response } from 'express';
import { resolveIpV3 } from '../../../lib/geo';

export const getCityByIpV3 = (req: Request, res: Response) => {
  const ip = req.params.ip;

  if (!ip) {
    throw new Error('Ip not provided');
  }

  const result = resolveIpV3(ip);
  if (!result) {
    res.send('Not Found');
    return;
  }
  res.send(result);
};
