import { Request, Response } from 'express';
import { cartDao } from '../models/dao/index';

export const cartCreate = async (req: Request, res: Response) => {
  const cartId = await cartDao.createNewCart();
  res.json(cartId);
};

export const cartDelete = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cart = await cartDao.cartDeleteById(id);

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  } else {
    if (cart === -1) {
      return res.status(500).json({
        error: -1,
        msg: 'Cart file is empty!',
      });
    } else {
      if (cart === -2) {
        return res.status(500).json({
          error: -2,
          msg: `There is no cart with id= ${id}`,
        });
      } else {
        res.json(`Cart id: ${id} deleted.`);
      }
    }
  }
};

export const getProductsByCartId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cart = await cartDao.getProductsByCartId(id);
  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  } else {
    res.json(cart);
  }
};

export const addToCartById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  const cart = await cartDao.addProductsById(id, product);

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  } else {
    res.json(cart);
  }
};

export const deleteProductByCartId = async (req: Request, res: Response) => {
  const { id, id_prod } = req.params;

  const cart = await cartDao.deleteProductByCartId(id, id_prod);

  if (cart instanceof Error) {
    return res.status(500).json({
      error: -1,
      msg: cart.message,
    });
  } else {
    res.json(cart);
  }
};
