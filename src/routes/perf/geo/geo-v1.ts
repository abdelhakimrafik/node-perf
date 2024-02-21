import { Request, Response } from 'express';
import { resolveIpV1 } from '../../../lib/geo';

export const getCityByIpV1 = (req: Request, res: Response) => {
  const ip = req.params.ip;

  if (!ip) {
    throw new Error('Ip not provided');
  }

  const result = resolveIpV1(ip);
  if (!result) {
    res.send('Not Found');
    return;
  }
  res.send(result);
};
