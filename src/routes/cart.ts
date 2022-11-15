import { Router } from 'express';
import { CartController } from '../controllers';
import checkUserAuth from '../middlewares/checkUserAuth';

const cartRouter = Router();

cartRouter
  .route('/cart/')
  .delete(checkUserAuth, CartController.cartDelete)
  .get(checkUserAuth, CartController.getProductsByCartId);
cartRouter
  .route('/cart/:prod_id')
  .post(checkUserAuth, CartController.addToCartById)
  .delete(checkUserAuth, CartController.deleteProductByCartId);

export default cartRouter;
