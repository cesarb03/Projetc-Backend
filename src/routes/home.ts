import { Router } from 'express';
import auth from '../middlewares/auth';
import checkUserRole from '../middlewares/checkUserRole';
import { getAll } from '../controllers/productsControllers';
import { renderAddProdForm } from '../controllers/sessionControllers';

export const home = Router();

home.get('/', auth, async (req, res) => {
  const products = await getAll(req, res);
  res.render('home', { logged: true, user: req.user, products: products });
});

home // solo admins
  .route('/addProdForm')
  .get(checkUserRole, renderAddProdForm);

export default home;
