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
  async getById(id: string) {
    return await this.model.getById(id);
  }

  async addProduct(product: any) {
    return await this.model.addProduct(product);
  }

  async updateProductById(id: string, product: any) {
    return await this.model.updateProductById(id, product);
  }

  async deleteProductById(id: string) {
    return await this.model.deleteProductById(id);
  }
}

export default new ProductService(model);
