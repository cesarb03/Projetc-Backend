import productModel from '../../../models/schemas/productSchema';
import mongoConnection from '../../mongoDB/connection';
import IProductDAO from './IProductDAO';
import ProductDTO from '../../DTOs/productDTO';
import Logger from '../../../utils/logger';
import mongoose from 'mongoose';

class ProductMongoDAO extends IProductDAO {
  model: mongoose.Model<any, {}, {}, {}>;
  DTO: any;
  static instance: ProductMongoDAO;

  constructor(model: mongoose.Model<any, {}, {}, {}>, DTO: ProductDTO) {
    super();
    this.model = model;
    this.DTO = DTO;
    mongoConnection();
  }

  static getInstance(productModel: mongoose.Model<any, {}, {}, {}>, DTO: any) {
    if (!this.instance) {
      this.instance = new ProductMongoDAO(productModel, DTO);
    }
    return this.instance;
  }

  public async getAll(): Promise<any[] | any> {
    const foundItems = await this.model.find();
    const data: any = foundItems.map((entity) => new this.DTO(entity).toJson());
    return data;
  }

  public async getById(id: String): Promise<any | Error> {
    if (!mongoose.isValidObjectId(id)) return undefined;
    const foundItem = await this.model.findById(id);

    if (!foundItem) return null;
    return new this.DTO(foundItem).toJson();
  }

  async addProduct(product: any): Promise<any | void> {
    const productToSave = new this.model(product);
    await productToSave.save();
  }

  public async updateProductById(id: any, newData: any): Promise<any> {
    try {
      const updatedData = await this.model.updateOne({ _id: id }, newData);

      if (updatedData.matchedCount === 0) {
        return { error: 'Product not found.' };
      } else {
        return { msg: `Product ${id} updated!` };
      }
    } catch (err) {
      Logger.error(`MongoAtlas updateProductById method error: ${err}`);
    }
  }

  public async deleteProductById(id: any): Promise<any> {
    try {
      const deletedData = await this.model.deleteOne({ _id: id });
      if (deletedData.deletedCount === 0) {
        return { error: 'Product not found.' };
      } else {
        return { msg: 'Product deleted.' };
      }
    } catch (err) {
      Logger.error(`MongoAtlas deleteProductById method error: ${err}`);
    }
  }
}

export default ProductMongoDAO.getInstance(productModel, ProductDTO);
