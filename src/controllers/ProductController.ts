import { Request, Response } from 'express';
import Logger from '../utils/logger';
import { ProductService } from '../services';

class ProductController {
  constructor() {}

  async getAll(req: Request, res: Response) {
    try {
      const products = await ProductService.getAll();
      return res.status(200).json({ products: products });
      // return products
    } catch (error) {
      Logger.error(`Error in getAll method: ${error}`);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await ProductService.getById(id);

      if (product === undefined || product === null)
        return res.status(404).json({ error: 'Cannot find requested product' });

      return res.status(200).json({ product: product });
    } catch (error) {
      Logger.error(`Error in getById method: ${error}`);
      return res.status(500).json({ error: 'An error has occurred.' });
    }
  }

  async addProduct(req: Request, res: Response) {
    try {
      const product = req.body;

      const { price, photoURL, stock } = product;
      if (photoURL instanceof String) return res.status(404).json({ error: 'photoURL must be type String.' });
      if (price instanceof Number) return res.status(404).json({ error: 'price must be type Number.' });
      if (stock instanceof Number) return res.status(404).json({ error: 'stock must be type Number.' });

      await ProductService.addProduct(product);
      return res.status(200).json({ ProductAdded: product });
    } catch (error) {
      Logger.error(`Error in addProduct method: ${error}`);
      return res.status(500).json({ error: 'An error has occurred.' });
    }
  }

  async updateProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = req.body;

      const productUpdated = await ProductService.updateProductById(id, product);

      if (productUpdated === undefined || productUpdated === null)
        return res.status(404).json({ error: 'Cannot find requested product' });

      return res.status(200).json({ ProductUpdated: productUpdated });
    } catch (error) {
      Logger.error(`Error in updateProductById method: ${error}`);
      return res.status(500).json({ error: 'An error has occurred.' });
    }
  }

  async deleteProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedProduct = await ProductService.deleteProductById(id);

      if (deletedProduct === undefined || deletedProduct === null)
        return res.status(404).json({ error: 'Cannot find requested product' });

      return res.status(200).json({ ProductDeleted: deletedProduct });
    } catch (error) {
      Logger.error(`Error in deleteProductById method: ${error}`);
    }
  }
}

export default new ProductController();
