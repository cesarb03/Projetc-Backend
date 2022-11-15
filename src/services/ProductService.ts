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
    const data = await this.model.getById(id);
    return data;
  }

  async getProductByCategory(category: String) {
    const data = await this.model.getByCategory(category);
    return data;
  }

  async addProduct(product: any) {
    const data = await this.model.addProduct(product);
    return data;
  }

  async updateProductById(id: string, product: any) {
    // return await this.model.updateProductById(id, product);
    const data = await this.model.updateProductById(id, product);
    return data;
  }

  async deleteProductById(id: string) {
    // return await this.model.deleteProductById(id);
    const data = await this.model.deleteProductById(id);
    return data;
  }
}

export default new ProductService(model);
