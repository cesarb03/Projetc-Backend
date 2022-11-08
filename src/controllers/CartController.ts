import { Request, Response } from 'express';
import { CartService } from '../services';
import MessageService from '../utils/messaging';
import Logger from '../utils/logger';
import MailSender from '../utils/nodemailer';

class CartController {
  constructor() {}

  // Esta funcion se ejecutará con el hook post declarado en el esquema del user, cuando se crea un user
  async cartCreate(user: any, res: Response) {
    try {
      await CartService.createNewCart(user);
      return res.status(200).json({ message: 'Cart Created' });
    } catch (error) {
      Logger.error(`Error in createNewCart method: ${error}`);
    }
  }

  async cartDelete(req: Request, res: Response) {
    try {
      const user = req.user;
      const cart = await CartService.cartDeleteById(user);
      return res.status(200).json({ NewCart: cart });
    } catch (error) {
      Logger.error(`Error in cartDeleteById method: ${error}`);
    }
  }

  async getProductsByCartId(req: Request, res: Response) {
    try {
      const user = req.user;
      const cartProducts = await CartService.getProductsByCartId(user);
      return res.status(200).json({ products: cartProducts });
    } catch (error) {
      Logger.error(error);
    }
  }

  async addToCartById(req: Request, res: Response) {
    try {
      const { prod_id } = req.params;
      const quantity = req.body.quantity;
      const user = req.user;
      const cart = await CartService.addProductsById(user, prod_id, quantity);
      return res.status(200).json({ ProductAdded: prod_id, NewCart: cart });
    } catch (error) {
      Logger.error(`Error in addProductsById method: ${error}`);
    }
  }

  async deleteProductByCartId(req: Request, res: Response) {
    try {
      const user = req.user;
      const { prod_id } = req.params;

      const productDeleted = await CartService.deleteProductByCartId(user, prod_id);
      return res.status(200).json({ Cart: productDeleted });
    } catch (error) {
      Logger.error(`Error in deleteProductByCartId method: ${error}`);
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
      Logger.error(`Error in cartOrder method: ${error}`);
    }
  }
}

export default new CartController();
