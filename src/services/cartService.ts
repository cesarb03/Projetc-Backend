import { cartDao } from '../models/dao';
import Logger from '../utils/logger';

const createNewCart = async (user: any) => {
  const data = await cartDao.createNewCart(user);
  return data;
};

const cartDeleteById = async (user: any) => {
  const data = await cartDao.cartDeleteById(user);
  return data;
};

const getProductsByCartId = async (user: any) => {
  const data = await cartDao.getProductsByCartId(user);
  return data;
};

const addProductsById = async (user: any, product: any) => {
  const data = await cartDao.addProductsById(user, product);
  return data;
};

const deleteProductByCartId = async (user: any, product: any) => {
  Logger.info(`Service: ${product}`);
  const data = await cartDao.deleteProductByCartId(user, product);
  return data;
};

export const cartService = {
  createNewCart,
  cartDeleteById,
  getProductsByCartId,
  addProductsById,
  deleteProductByCartId,
};
