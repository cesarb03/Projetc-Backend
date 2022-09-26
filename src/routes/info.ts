import { Router } from 'express';
import renderInfo from '../controllers/infoControllers';

export const info: Router = Router();

info.get('/', renderInfo);
