import { Router } from 'express';
export const productsRouter = Router();
import { ProductController } from '../controllers';

// Vinculo los endpoints con sus respectivos controllers.
productsRouter.route('/products').get(ProductController.getAll).post(ProductController.addProduct);

productsRouter
  .route('/products/:id')
  .get(ProductController.getById)
  .put(ProductController.updateProductById)
  .delete(ProductController.deleteProductById);

export default productsRouter;
