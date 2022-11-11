import { Router } from 'express';
import { sessionLogin } from './session/login';
import { sessionLogout } from './session/logout';
import { sessionSignup } from './session/register';
import productsRouter from './products';
import cartRouter from './cart';
import home from './home';
import auth from '../middlewares/auth';
import infoRouter from './info';

const indexRouter = Router();

//RUTAS
indexRouter.use('/login', sessionLogin);
indexRouter.use('/logout', sessionLogout);
indexRouter.use('/signup', sessionSignup);
indexRouter.use('/home', home);
indexRouter.use('/api', productsRouter, cartRouter);
indexRouter.use('/info', infoRouter);

indexRouter.use('/', auth, async (req, res) => {
  return res.redirect('/home');
});

export default indexRouter;
