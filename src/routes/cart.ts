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

cartRouter.post('/cart', cartCreate); //Crea un nuevo cart.
cartRouter.post('/cart/delete', cartDelete); //Elimina cart by ID
cartRouter.get('/cart/', getProductsByCartId); //Trae todos los productos guardados en el cart seleccionado.
cartRouter.post('/cart/addProduct/', addToCartById); //Añade un producto al carrito target.
cartRouter.post('/cart/deleteProduct/', deleteProductByCartId); //Elimina un producto target de un carrito target.

cartRouter.post('/cart/order', cartOrder);
