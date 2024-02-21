import { Request, Response } from 'express';
import { connector } from './connector';

export const eventV2 = (req: Request, res: Response) => {
  connector.once('connected', async (db) => {
    res.end(await db.get());
  });
};
