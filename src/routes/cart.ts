import { Router } from 'express';
import { CartController } from '../controllers';

export const cartRouter = Router();

// cartRouter.route('/cart/').post(CartController.cartCreate).get(CartController.getProductsByCartId);

cartRouter.route('/cart/').delete(CartController.cartDelete);

cartRouter.route('/cart/:prod_id').post(CartController.addToCartById);

cartRouter.route('/cart/deleteProduct').delete(CartController.deleteProductByCartId);

cartRouter.route('/cart/').get(CartController.getProductsByCartId);

// cartRouter.route('/cart/order').post(CartController.cartOrder);

export default cartRouter;
