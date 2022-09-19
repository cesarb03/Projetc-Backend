import fs from 'fs';
import FileContainer from '../../container/filesystemContainer';
import { product } from '../../../interfaces/product';
import { storedProduct } from '../../../interfaces/storedProduct';

class ProductsDAOFilesystem extends FileContainer {
  constructor() {
    super('./src/data/products.txt');
  }

  private readonly readFile = async (): Promise<storedProduct[]> => {
    try {
      return (await fs.promises.readFile(this.fileName, 'utf8'))
        ? JSON.parse(await fs.promises.readFile(this.fileName, 'utf8'))
        : ([] as storedProduct[]);
    } catch (err: any) {
      if (err.errno === -2) {
        try {
          await fs.promises.writeFile(this.fileName, JSON.stringify([]));
          return [] as storedProduct[];
        } catch (err: any) {
          console.error('Could not create file in such directory. ', err);
        }
      } else {
        console.log('readFile: ', err);
      }
      return [] as storedProduct[];
    }
  };

  private readonly writeFile = async (data: Array<product>): Promise<void> => {
    try {
      await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, 2));
    } catch (err: any) {
      console.log('Method writeFile: ', err);
    }
  };

  public async addProduct(product: product): Promise<number | void> {
    try {
      const fileData: storedProduct[] = await this.readFile();
      const id: number =
        fileData.length === 0 ? 1 : Math.max(...fileData.map((object: storedProduct) => object.id)) + 1;

      const timestamp = new Date().toLocaleString('es-AR');

      fileData.push({ ...product, id, timestamp });
      await this.writeFile(fileData);

      return id;
    } catch (err: any) {
      console.log('Method save: ', err);
    }
  }

  public async getAll(): Promise<storedProduct[]> {
    return await this.readFile();
  }

  public async getById(id: number): Promise<storedProduct | any> {
    try {
      const fileData: storedProduct[] = await this.readFile();

      return (
        fileData.find((object: storedProduct) => object.id === Number(id)) ?? {
          error: 'Product not found',
        }
      );
    } catch (err: any) {
      console.log('Method getById: ', err);
    }
    return { error: 'fetch item method failed' };
  }

  public async updateProductById(id: number, product: product): Promise<void | Error> {
    try {
      const fileData: storedProduct[] = await this.readFile();
      const newFileData: storedProduct[] = fileData.map((object: storedProduct) =>
        object.id === Number(id) ? { ...object, ...product } : object
      );

      await this.writeFile(newFileData);
    } catch (err: any) {
      console.log('Method update: ', err);
    }
  }

  public async deleteProductById(id: number): Promise<string | void> {
    try {
      const fileData: storedProduct[] = await this.readFile();
      const newFileData: storedProduct[] = fileData.filter((object: storedProduct) => object.id !== Number(id));

      if (fileData.length === newFileData.length) {
        return `There is NO product with id= ${id}`;
      } else {
        await this.writeFile(newFileData);
        return `Product ${id} deleted`;
      }
    } catch (err: any) {
      console.log('Method deleteById: ', err);
    }
  }
}

export default new ProductsDAOFilesystem();
