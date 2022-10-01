import { Router } from 'express';
import {
  cartCreate,
  cartDelete,
  getProductsByCartId,
  addToCartById,
  deleteProductByCartId,
  cartOrder,
} from '../controllers/cartControllers';

export const cartRouter = Router();

cartRouter.route('/cart/').post(cartCreate).get(getProductsByCartId);

cartRouter.route('/cart/delete').post(cartDelete);

cartRouter.route('/cart/addProduct').post(addToCartById);

cartRouter.route('/cart/deleteProduct').post(deleteProductByCartId);

cartRouter.route('/cart/order').post(cartOrder);

export default cartRouter;
