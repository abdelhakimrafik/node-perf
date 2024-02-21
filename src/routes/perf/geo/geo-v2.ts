import { Request, Response } from 'express';
import { resolveIpV2 } from '../../../lib/geo';

export const getCityByIpV2 = (req: Request, res: Response) => {
  const ip = req.params.ip;

  if (!ip) {
    throw new Error('Ip not provided');
  }

  const result = resolveIpV2(ip);
  if (!result) {
    res.send('Not Found');
    return;
  }
  res.send(result);
};
