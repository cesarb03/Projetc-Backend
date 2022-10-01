import { Router } from 'express';
export const productsRouter = Router();
import { getAll, getById, addProduct, updateProductById, deleteProductById } from '../controllers/productsControllers';

// Vinculo los endpoints con sus respectivos controllers.
productsRouter.route('/products').get(getAll).post(addProduct);

productsRouter.route('/products/:id').get(getById).put(updateProductById).delete(deleteProductById);

export default productsRouter;
