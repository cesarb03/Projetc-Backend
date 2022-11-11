import { config } from '../db/config';
import Logger from '../utils/logger';
import ProductMongoCloudDAO from './DAOs/products/mongoDbCloud';
import CartMongoCloudDAO from './DAOs/cart/mongoDbCloud';
import OrderMongoCloudDAO from './DAOs/order/mongoDbCloud';

class PersistenceFactory {
  static getPersistence(persistence: string | number, modelName: any) {
    try {
      switch (persistence) {
        case 1:
          if (modelName === 'products') {
            return ProductMongoCloudDAO;
          }
          if (modelName === 'cart') {
            return CartMongoCloudDAO;
          }
          if (modelName === 'order') {
            return OrderMongoCloudDAO;
          }
          break;

        default:
          if (modelName === 'products') {
            return ProductMongoCloudDAO;
          }
          if (modelName === 'cart') {
            return CartMongoCloudDAO;
          }
          break;
      }

      throw new Error('Persistence not found');
    } catch (error) {
      Logger.error(`Persistence type not found ${error}`);
    }
  }
}

const persistence = config.PERSISTENCE;

export default (modelName: any) => PersistenceFactory.getPersistence(persistence, modelName);
