import { Router } from 'express';
import auth from '../middlewares/auth';
import checkUserRole from '../middlewares/checkUserRole';
import { ProductController, SessionController } from '../controllers';

export const home = Router();

home.get('/', auth, async (req, res) => {
  const products = await ProductController.getAll(req, res);
  res.render('home', { logged: true, user: req.user, products: products });
});

home // solo admins
  .route('/addProdForm')
  .get(checkUserRole, SessionController.renderAddProdForm);

export default home;
