import { Request, Response } from 'express';
import { productDao } from '../models/dao/index';
import Logger from '../utils/logger';

export const getAll = async (req: Request, res: Response) => {
  const products = await productDao.getAll();
  Logger.info(products);
  return products;
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = await productDao.getById(id);

  res.json(body);
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    await productDao.addProduct(product);
    Logger.info('Product added');
    res.redirect('/api/addProdForm');
  } catch (error) {
    Logger.error(error);
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  await productDao.updateProductById(id, product);

  res.json({ msg: `Product ${id} updated.` });
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedProduct = await productDao.deleteProductById(id);

  res.json({
    deletedProduct,
  });
};
