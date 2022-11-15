import { Router } from 'express';
import { ProductController } from '../controllers';
import checkUserAuth from '../middlewares/checkUserAuth';
import checkUserRole from '../middlewares/checkUserRole';

const productsRouter = Router();

// Vinculo los endpoints con sus respectivos controllers.
productsRouter
  .route('/products')
  .get(ProductController.getAll)
  .post(checkUserAuth, checkUserRole, ProductController.addProduct);

productsRouter
  .route('/products/:id')
  .get(ProductController.getById)
  .put(checkUserAuth, checkUserRole, ProductController.updateProductById)
  .delete(checkUserAuth, checkUserRole, ProductController.deleteProductById);

productsRouter.route('/categories/:category').get(ProductController.getProductByCategory);

export default productsRouter;
