import { Request, Response } from 'express';
import { cartService } from '../services/cartService';
import MessageService from '../utils/messaging';
import Logger from '../utils/logger';
import MailSender from '../utils/nodemailer';

// Esta funcion se ejecutará con el hook post declarado en el esquema del user, cuando se crea un user
export const cartCreate = async (user: any) => {
  try {
    await cartService.createNewCart(user);
    Logger.info(`Cart created for user ${user.email}`);
  } catch (error) {
    Logger.error(error);
  }
};

export const cartDelete = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    await cartService.cartDeleteById(user);
    res.redirect('/api/cart');
  } catch (error) {
    Logger.error(`Error in cartDeleteById method: ${error}`);
  }
};

export const getProductsByCartId = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const cartProducts = await cartService.getProductsByCartId(user);
    res.render('cart', { products: cartProducts, user: user });
  } catch (error) {
    Logger.error(error);
  }
};

export const addToCartById = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const user = req.user;
    await cartService.addProductsById(product, user);
    res.redirect('/api/cart');
  } catch (error) {
    Logger.error(error);
  }
};

export const deleteProductByCartId = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const user = req.user;
    await cartService.deleteProductByCartId(user, product);
    res.redirect('/api/cart');
  } catch (error) {
    Logger.error(error);
  }
};

export const cartOrder = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const cartProducts = await cartService.getProductsByCartId(user);
    // await cartDao.cartDeleteById(user);
    MailSender.newOrder(user, cartProducts);
    MessageService.newSMS(user);
    MessageService.newWhatsapp(user);
    res.redirect('/');
  } catch (error) {
    Logger.error(error);
  }
};
