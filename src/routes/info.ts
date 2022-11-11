import { Router } from 'express';
import { renderInfo } from '../controllers';

export const infoRouter = Router();

infoRouter.route('/').get(renderInfo);

export default infoRouter;
