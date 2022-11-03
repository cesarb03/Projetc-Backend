import { Request, Response } from 'express';
import { CartService } from '../services';
import MessageService from '../utils/messaging';
import Logger from '../utils/logger';
import MailSender from '../utils/nodemailer';

class CartController {
  constructor() {}

  // Esta funcion se ejecutará con el hook post declarado en el esquema del user, cuando se crea un user
  async cartCreate(user: any) {
    try {
      await CartService.createNewCart(user);
      Logger.info(`Cart created for user ${user.email}`);
    } catch (error) {
      Logger.error(error);
    }
  }

  async cartDelete(req: Request, res: Response) {
    try {
      const user = req.user;
      await CartService.cartDeleteById(user);
      res.redirect('/api/cart');
    } catch (error) {
      Logger.error(`Error in cartDeleteById method: ${error}`);
    }
  }

  async getProductsByCartId(req: Request, res: Response) {
    try {
      const user = req.user;
      const cartProducts = await CartService.getProductsByCartId(user);
      return res.status(200).json({ products: cartProducts, User: user });
    } catch (error) {
      Logger.error(error);
    }
  }

  async addToCartById(req: Request, res: Response) {
    try {
      const product = req.params;
      const user = req.user;
      await CartService.addProductsById(product, user);
      res.redirect('/api/cart');
    } catch (error) {
      Logger.error(error);
    }
  }

  async deleteProductByCartId(req: Request, res: Response) {
    try {
      const { product } = req.params;
      const user = req.user;
      await CartService.deleteProductByCartId(user, product);
      res.redirect('/api/cart');
    } catch (error) {
      Logger.error(error);
    }
  }

  async cartOrder(req: Request, res: Response) {
    try {
      const user = req.user;
      const cartProducts = await CartService.getProductsByCartId(user);
      // await cartDao.cartDeleteById(user);
      MailSender.newOrder(user, cartProducts);
      MessageService.newSMS(user);
      MessageService.newWhatsapp(user);
      res.redirect('/');
    } catch (error) {
      Logger.error(error);
    }
  }
}

export default new CartController();
