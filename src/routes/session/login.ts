import { Router } from 'express';
import passport from 'passport';
import { renderLogin, login, renderFailedLogin } from '../../controllers/sessionControllers';

export const sessionLogin = Router();

sessionLogin.get('/', renderLogin);
sessionLogin.post('/', passport.authenticate('login', { failureRedirect: '/login/failed', failureFlash: true }), login);
sessionLogin.get('/failed', renderFailedLogin);
