import { Router } from 'express';
import { renderInfo } from '../controllers';

const infoRouter = Router();

infoRouter.route('/').get(renderInfo);

export default infoRouter;
