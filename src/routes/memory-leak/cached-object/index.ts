import { Request, Response } from 'express';
import { compute } from './cache-v1';
import { randomKey } from './utils';
import { computeV2 } from './cache-v2';

export const handlerV1 = (req: Request, res: Response) => {
  const key = randomKey();
  compute(key);
  res.send(`OK > ${key}`);
};

export const handlerV2 = (req: Request, res: Response) => {
  const key = randomKey();
  computeV2(key);
  res.send(`OK > ${key}`);
};
