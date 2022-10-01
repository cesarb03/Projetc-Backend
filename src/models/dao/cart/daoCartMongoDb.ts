import Logger from '../../../utils/logger';
import MongoDBContainer from '../../container/mongoDbContainer';
import cartModel from '../../schemas/cartSchema';

class CartsDAOMongoDB extends MongoDBContainer {
  constructor() {
    super(cartModel);
  }

  async createNewCart(user: any) {
    const cart = new this.model({ user: { id: user.id, email: user.email }, products: [] });
    await cart.save();
  }

  async cartDeleteById(user: any) {
    const cart: any = await this.model.findOne({ user: user.id });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      const cartProductsDelete = await this.model.updateOne(
        { _id: cart._id },
        {
          $set: {
            products: [],
          },
        }
      );
      if (cartProductsDelete.modifiedCount === 0) {
        Logger.error('Products not deleted from cart');
      } else {
        Logger.info('Products deleted from cart');
      }
    }
  }

  async getProductsByCartId(user: any) {
    const cart: any = await this.model.findOne().populate({ path: 'user.id' });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      const foundItemsInCart = cart.products;
      return foundItemsInCart;
    }
  }

  async addProductsById(product: any, user: any) {
    const cart: any = await this.model.findOne().populate({ path: 'user.id' });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      const newCartProduct = await this.model.updateOne(
        { _id: cart._id },
        {
          $push: {
            products: product,
          },
        }
      );
      if (newCartProduct.modifiedCount === 0) {
        Logger.error('Product not added to cart');
      } else {
        Logger.info('Product added to cart');
      }
    }
  }

  async deleteProductByCartId(user: any, product: any) {
    const cart: any = await this.model.findOne().populate({ path: 'user.id' });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      const deleteCartProduct = await this.model.updateOne(
        { _id: cart._id },
        {
          $pull: {
            products: { id: product.id },
          },
        }
      );
      if (deleteCartProduct.modifiedCount === 0) {
        Logger.error('Product not deleted from cart');
      } else {
        Logger.info('Product deleted from cart');
      }
    }
  }
}

export default new CartsDAOMongoDB();
