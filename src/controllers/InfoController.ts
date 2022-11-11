import { Request, Response } from 'express';
import { config } from '../db/config';

export const renderInfo = (req: Request, res: Response) => {
  res.render('info', { config });
};
