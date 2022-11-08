import mongoose from 'mongoose';
import cartModel from '../../../models/schemas/cartSchema';
import CartDTO from '../../DTOs/cartDTO';
import Logger from '../../../utils/logger';

class CartMongoDAO {
  model: mongoose.Model<any, {}, {}, {}>;
  DTO: any;
  static instance: CartMongoDAO;

  constructor(cartModel: mongoose.Model<any, {}, {}, {}>, DTO: CartDTO) {
    this.model = cartModel;
    this.DTO = DTO;
  }

  static getInstance(cartModel: mongoose.Model<any, {}, {}, {}>, DTO: any) {
    if (!this.instance) {
      this.instance = new CartMongoDAO(cartModel, DTO);
    }
    return this.instance;
  }

  async createNewCart(user: any) {
    const cart = new this.model({ user_id: user.id, user_email: user.email, products: [] });
    // const cart = new this.model({ user: user.id, products: [] });
    const data = await cart.save();
    return new this.DTO(data).toJson();
  }

  async cartDeleteById(user: any) {
    const cart: any = await this.model.findOne({ user_id: user.id });

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
        return { error: 'Products not deleted from Cart' };
      } else {
        const updatedCart: any = await this.model.findOne({ user_id: user.id });
        return new this.DTO(updatedCart).toJson();
      }
    }
  }

  async getProductsByCartId(user: any) {
    const cart: any = await this.model.findOne({ user_id: user.id });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      return new this.DTO(cart).getProducts();
    }
  }

  async addProductsById(user: any, prod_id: any, quantity: any) {
    // const cart: any = await this.model.findOne().populate({ path: 'user.id' });
    const cart: any = await this.model.findOne({ user_id: user.id });

    if (cart === null) {
      Logger.error(`Cart not found in addProductsById method.`);
    } else {
      // checks if products already exists in cart
      let prodExistence = await this.model.aggregate([
        { $match: { 'products.prod_id': prod_id } },
        {
          $project: {
            count: {
              $size: {
                // to get total elements in bottom filtered result
                $filter: {
                  // to iterate loop of products array and match productId
                  input: '$products',
                  cond: {
                    $eq: ['$$this.prod_id', prod_id],
                  },
                },
              },
            },
          },
        },
        {
          $group: {
            // get total count
            _id: null,
            count: { $sum: '$count' },
          },
        },
      ]);
      if (prodExistence && prodExistence[0]) {
        const newCartProductQty = await this.model.updateOne(
          { _id: cart._id, 'products.prod_id': prod_id },
          {
            $inc: { 'products.$.quantity': quantity },
          }
        );

        if (newCartProductQty.modifiedCount === 0) {
          Logger.error('Product quantity could not been modified.');
        } else {
          Logger.info('Product quantity succesfully updated!');
          const updatedCart: any = await this.model.findOne({ user_id: user._id });
          return new this.DTO(updatedCart).toJson();
        }
      } else {
        // product does not exists.
        const newCartProduct = await this.model.updateOne(
          { _id: cart._id },
          {
            $push: {
              products: {
                prod_id,
                quantity,
              },
            },
          }
        );
        if (newCartProduct.modifiedCount === 0) {
          Logger.error('Product not added to cart.');
        } else {
          Logger.info('Product succesfully added to cart!');
          const updatedCart: any = await this.model.findOne({ user_id: user._id });
          return new this.DTO(updatedCart).toJson();
        }
      }
    }
  }

  async deleteProductByCartId(user: any, prod_id: any): Promise<any | any> {
    const cart: any = await this.model.findOne({ user_id: user.id });

    if (cart === null) {
      return { error: 'Cart not found' };
    } else {
      const deleteCartProduct = await this.model.updateOne(
        { _id: cart._id },
        {
          $pull: {
            products: { id: prod_id },
          },
        }
      );
      if (deleteCartProduct.modifiedCount === 0) {
        Logger.error('Product not deleted from cart');
      } else {
        Logger.info('Product deleted from cart');
        return prod_id;
      }
    }
  }
}

// export default new CartMongoDAO(cartModel, CartDTO);
export default CartMongoDAO.getInstance(cartModel, CartDTO);
