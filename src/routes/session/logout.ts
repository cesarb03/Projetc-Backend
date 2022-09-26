import { Router } from 'express';

import { logout } from '../../controllers/sessionControllers';

export const sessionLogout = Router();

sessionLogout.post('/', logout);
