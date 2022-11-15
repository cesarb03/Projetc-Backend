import { Router } from 'express';
import { renderInfo } from '../controllers';

const infoRouter = Router();

infoRouter.route('/info').get(renderInfo);

export default infoRouter;
