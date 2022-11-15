import { Router } from 'express';
import { sessionLogin, sessionLogout, sessionSignup } from './session';
import productsRouter from './products';
import cartRouter from './cart';
import infoRouter from './info';
import OrderRouter from './order';
import ChatRouter from './chat';

const indexRouter = Router();

// RUTAS
indexRouter.use('/login', sessionLogin);
indexRouter.use('/logout', sessionLogout);
indexRouter.use('/signup', sessionSignup);
indexRouter.use('/api', productsRouter, cartRouter, OrderRouter, ChatRouter, infoRouter);

export default indexRouter;
