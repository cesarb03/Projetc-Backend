import { Router } from 'express';
export const productsRouter = Router();
import { getAll, getById, addProduct, updateProductById, deleteProductById } from '../controllers/productsControllers';
import { renderAddProdForm } from '../controllers/sessionControllers';

//Vinculo los endpoints con sus respectivos controllers.
productsRouter.get('/products', getAll); //Trae todo los productos.
productsRouter.get('/products/:id', getById); //Trae producto por ID.
productsRouter.post('/products', addProduct); //Añade un nuevo producto (POST).
productsRouter.put('/products/:id', updateProductById); //Actualiza producto por ID (PUT).
productsRouter.delete('/products/:id', deleteProductById); //Elimina producto por ID (DELETE).

productsRouter.get('/addProdForm', renderAddProdForm); //Renderiza la vista de Add Produts (sólo Admin).
