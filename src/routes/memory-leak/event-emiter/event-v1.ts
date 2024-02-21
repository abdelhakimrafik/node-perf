import { Request, Response } from 'express';
import { connector } from './connector';

export const eventV1 = (req: Request, res: Response) => {
  // console.log('# Number of listeners >', connector.listenerCount('connected'));
  connector.on('connected', async (db) => {
    res.end(await db.get());
  });
};
