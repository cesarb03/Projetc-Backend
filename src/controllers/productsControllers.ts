import { Request, Response } from 'express';
import Logger from '../utils/logger';
import { productService } from '../services/productService';

export const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return products;
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = await productService.getById(id);

  res.json(body);
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    await productService.addProduct(product);
    Logger.info('Product added');
    res.redirect('/api/addProdForm');
  } catch (error) {
    Logger.error(error);
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  await productService.updateProductById(id, product);

  res.json({ msg: `Product ${id} updated.` });
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedProduct = await productService.deleteProductById(id);

  res.json({
    deletedProduct,
  });
};
