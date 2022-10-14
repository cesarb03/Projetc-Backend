import { Router } from 'express';
import passport from 'passport';
import { SessionController } from '../../controllers';

export const sessionLogin = Router();

sessionLogin.get('/', SessionController.renderLogin);
sessionLogin.post(
  '/',
  passport.authenticate('login', { failureRedirect: '/login/failed', failureFlash: true }),
  SessionController.login
);
sessionLogin.get('/failed', SessionController.renderFailedLogin);
