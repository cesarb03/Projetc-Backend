"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var productsControllers_1 = require("../controllers/productsControllers");
var cartControllers_1 = require("../controllers/cartControllers");
var auth_1 = __importDefault(require("../middlewares/auth"));
//Vinculo los endpoints con sus respectivos controllers.
router.get('/products', productsControllers_1.getAll); //Trae todo los productos.
router.get('/products/:id', productsControllers_1.getById); //Trae producto por ID.
router.post('/products', auth_1.default, productsControllers_1.addProduct); //Añade un nuevo producto (POST).
router.put('/products/:id', auth_1.default, productsControllers_1.updateProductById); //Actualiza producto por ID (PUT).
router.delete('/products/:id', productsControllers_1.deleteProductById); //Elimina producto por ID (DELETE).
router.post('/cart', cartControllers_1.cartCreate); //Crea un nuevo cart.
router.delete('/cart/:id', cartControllers_1.cartDelete); //Elimina cart by ID
router.get('/cart/:id/products', cartControllers_1.getProductsByCartId); //Trae todos los productos guardados en el cart seleccionado.
router.post('/cart/:id/products', cartControllers_1.addToCartById); //Añade un producto al carrito target.
router.delete('/cart/:id/products/:id_prod', cartControllers_1.deleteProductByCartId); //Elimina un producto target de un carrito target.
exports.default = router;
//# sourceMappingURL=routes.js.map