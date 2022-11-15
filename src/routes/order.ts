import { Router } from 'express';
import { OrderController } from '../controllers';
import checkUserAuth from '../middlewares/checkUserAuth';

const OrderRouter = Router();

OrderRouter.post('/order', checkUserAuth, OrderController.createOrder);

export default OrderRouter;
