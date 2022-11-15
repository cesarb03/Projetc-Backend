import { Router } from 'express';
import { sessionLogin, sessionLogout, sessionSignup } from './session';
import productsRouter from './products';
import cartRouter from './cart';
import infoRouter from './info';

const indexRouter = Router();

// RUTAS
indexRouter.use('/login', sessionLogin);
indexRouter.use('/logout', sessionLogout);
indexRouter.use('/signup', sessionSignup);
indexRouter.use('/api', productsRouter, cartRouter);
indexRouter.use('/info', infoRouter);

indexRouter.use('/api/order', OrderRouter);
indexRouter.use('/api/chat', ChatRouter);

export default indexRouter;
