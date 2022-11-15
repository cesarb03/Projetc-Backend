import { Router } from 'express';
import { ProductController } from '../controllers';

const productsRouter = Router();

// Vinculo los endpoints con sus respectivos controllers.
productsRouter.route('/products').get(ProductController.getAll).post(ProductController.addProduct);

productsRouter
  .route('/products/:id')
  .get(ProductController.getById)
  .put(ProductController.updateProductById)
  .delete(ProductController.deleteProductById);

export default productsRouter;
