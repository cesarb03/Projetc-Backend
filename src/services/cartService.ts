import m from '../persistence/factory';
const model = m('cart');

class CartService {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async createNewCart(user: any) {
    return await this.model.createNewCart(user);
  }

  async cartDeleteById(user: any) {
    return await this.model.cartDeleteById(user);
  }

  async getProductsByCartId(user: any) {
    return await this.model.getProductsByCartId(user);
  }

  async addProductsById(user: any, prod_id: any, quantity: any) {
    return await this.model.addProductsById(user, prod_id, quantity);
  }

  async deleteProductByCartId(user: any, prod_id: any) {
    return await this.model.deleteProductByCartId(user, prod_id);
  }
}

export default new CartService(model);
