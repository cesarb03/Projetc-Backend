import { Router } from 'express';
import { CartController } from '../controllers';

export const cartRouter = Router();

cartRouter.route('/cart/').post(CartController.cartCreate).get(CartController.getProductsByCartId);

cartRouter.route('/cart/delete').post(CartController.cartDelete);

cartRouter.route('/cart/addProduct').post(CartController.addToCartById);

cartRouter.route('/cart/deleteProduct').post(CartController.deleteProductByCartId);

cartRouter.route('/cart/order').post(CartController.cartOrder);

export default cartRouter;
