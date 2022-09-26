import { Router } from 'express';

export const home = Router();

import { renderHome } from '../controllers/sessionControllers';

home.get('/', renderHome);
