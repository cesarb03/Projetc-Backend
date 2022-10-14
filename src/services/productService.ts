import m from '../persistence/factory';
const model = m('products');

class ProductService {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async getAll() {
    const data = await this.model.getAll();
    return data;
  }
  async getById(id: any) {
    const data = await this.model.getById(Number(id));
    return data;
  }

  async addProduct(product: any) {
    const data = await this.model.addProduct(product);
    return data;
  }

  async updateProductById(id: any, product: any) {
    const data = await this.model.updateProductById(Number(id), product);
    return data;
  }

  async deleteProductById(id: any) {
    const data = await this.model.deleteProductById(Number(id));
    return data;
  }
}

export default new ProductService(model);
