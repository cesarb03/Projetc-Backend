"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var filesystemContainer_1 = __importDefault(require("../../container/filesystemContainer"));
var CartDAOFilesystem = /** @class */ (function (_super) {
    __extends(CartDAOFilesystem, _super);
    function CartDAOFilesystem() {
        var _this = _super.call(this, './src/data/cart.txt') || this;
        _this.writeFile = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs_1.default.promises.writeFile(this.fileName, JSON.stringify(data, null, 2))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('Method: writeFile, ', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.readCartFile = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, err_2, err_3;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 12]);
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.fileName, 'utf8')];
                    case 1:
                        if (!(_d.sent())) return [3 /*break*/, 3];
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.fileName, 'utf8')];
                    case 2:
                        _a = _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _d.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        err_2 = _d.sent();
                        if (!(err_2.errno === -2)) return [3 /*break*/, 10];
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, fs_1.default.promises.writeFile(this.fileName, JSON.stringify([]))];
                    case 7:
                        _d.sent();
                        return [2 /*return*/, []];
                    case 8:
                        err_3 = _d.sent();
                        console.error('Method: readFile: could not create file in such directory.', err_3);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        console.log('Method readFile: ', err_2);
                        _d.label = 11;
                    case 11: return [2 /*return*/, []];
                    case 12: return [2 /*return*/];
                }
            });
        }); };
        _this.readProductsFile = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, err_4, err_5;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 12]);
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.productFilePath, 'utf8')];
                    case 1:
                        if (!(_d.sent())) return [3 /*break*/, 3];
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, fs_1.default.promises.readFile(this.productFilePath, 'utf8')];
                    case 2:
                        _a = _c.apply(_b, [_d.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _d.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        err_4 = _d.sent();
                        if (!(err_4.errno === -2)) return [3 /*break*/, 10];
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, fs_1.default.promises.writeFile(this.productFilePath, JSON.stringify([]))];
                    case 7:
                        _d.sent();
                        return [2 /*return*/, []];
                    case 8:
                        err_5 = _d.sent();
                        console.error('Could not create file in such directory. ', err_5);
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        console.log('Method readFile: ', err_4);
                        _d.label = 11;
                    case 11: return [2 /*return*/, []];
                    case 12: return [2 /*return*/];
                }
            });
        }); };
        //Crea un nuevo Cart
        _this.createNewCart = function () { return __awaiter(_this, void 0, void 0, function () {
            var carts, timestamp, cartId, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.readCartFile()];
                    case 1:
                        carts = _a.sent();
                        timestamp = new Date().toLocaleString('es-AR');
                        if (!(carts.length === 0 || typeof carts === 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.writeFile([{ cartId: 1, timestamp: timestamp, products: [] }])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 1];
                    case 3:
                        cartId = Math.max.apply(Math, carts.map(function (object) { return object.cartId; })) + 1;
                        return [4 /*yield*/, this.writeFile(__spreadArray(__spreadArray([], carts, true), [{ cartId: cartId, timestamp: timestamp, products: [] }], false))];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, cartId];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_6 = _a.sent();
                        console.error(err_6);
                        return [2 /*return*/, err_6];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        //Elimina cart by ID
        _this.cartDeleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var carts, newCart, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.readCartFile()];
                    case 1:
                        carts = _a.sent();
                        if (!(carts.length === 0 || typeof carts === 'undefined')) return [3 /*break*/, 2];
                        return [2 /*return*/, -1];
                    case 2:
                        newCart = carts.filter(function (object) { return object.cartId !== Number(id); });
                        if (!(newCart.length === carts.length)) return [3 /*break*/, 3];
                        return [2 /*return*/, -2];
                    case 3: return [4 /*yield*/, this.writeFile(newCart)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, 200];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_7 = _a.sent();
                        console.error(err_7);
                        return [2 /*return*/, err_7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        //Trae todos los productos guardados en el cart seleccionado.
        _this.getProductsByCartId = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var carts, foundCart, cartProducts, err_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.readCartFile()];
                    case 1:
                        carts = _a.sent();
                        foundCart = carts.find(function (object) { return object.cartId === Number(id); });
                        if (typeof foundCart !== 'undefined') {
                            cartProducts = foundCart.products;
                            if (cartProducts.length === 0) {
                                return [2 /*return*/, new Error('Cart has no products.')];
                            }
                            else {
                                return [2 /*return*/, cartProducts];
                            }
                        }
                        else {
                            return [2 /*return*/, new Error('Cart not found')];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_8 = _a.sent();
                        console.error(err_8);
                        return [2 /*return*/, err_8];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //Añade un producto al carrito target.
        _this.addProductsById = function (id, productId) { return __awaiter(_this, void 0, void 0, function () {
            var carts, foundCart, products, productToAdd, newProducts_1, newCart, err_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.readCartFile()];
                    case 1:
                        carts = _a.sent();
                        foundCart = carts.find(function (object) { return object.cartId === Number(id); });
                        return [4 /*yield*/, this.readProductsFile()];
                    case 2:
                        products = _a.sent();
                        productToAdd = products.filter(function (object) {
                            //Selecciono el producto elegido
                            if (object.id === Number(productId.id)) {
                                return object;
                            }
                        });
                        if (!(productToAdd.length === 0)) return [3 /*break*/, 3];
                        return [2 /*return*/, new Error("There is no such product with id= ".concat(Number(productId.id)))];
                    case 3:
                        if (!(typeof foundCart !== 'undefined' && typeof productToAdd !== 'undefined')) return [3 /*break*/, 5];
                        newProducts_1 = __spreadArray(__spreadArray([], foundCart.products, true), productToAdd, true);
                        newCart = carts.map(function (object) { return (object.cartId === Number(id) ? __assign(__assign({}, object), { products: newProducts_1 }) : object); } //Almaceno dicho array al cart target.
                        );
                        return [4 /*yield*/, this.writeFile(newCart)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, productToAdd];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_9 = _a.sent();
                        console.error(err_9);
                        return [2 /*return*/, err_9];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        //Elimina un producto target de un carrito target.
        _this.deleteProductByCartId = function (id, productId) { return __awaiter(_this, void 0, void 0, function () {
            var carts, foundCart, newProducts_2, newCart, err_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.readCartFile()];
                    case 1:
                        carts = _a.sent();
                        foundCart = carts.find(function (object) { return object.cartId === Number(id); });
                        if (!(typeof foundCart !== 'undefined')) return [3 /*break*/, 5];
                        newProducts_2 = foundCart.products.filter(function (object) { return object.id !== Number(productId); });
                        if (!(newProducts_2.length === foundCart.products.length)) return [3 /*break*/, 2];
                        return [2 /*return*/, new Error("Product id=".concat(productId, " not found in cart id=").concat(Number(id), "."))];
                    case 2:
                        newCart = carts.map(function (object) {
                            return object.cartId === Number(id) ? __assign(__assign({}, object), { products: newProducts_2 }) : object;
                        });
                        return [4 /*yield*/, this.writeFile(newCart)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, new Error("Cart id=".concat(id, " not found."))];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        err_10 = _a.sent();
                        console.error(err_10);
                        return [2 /*return*/, err_10];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        _this.productFilePath = './src/data/products.txt';
        return _this;
    }
    return CartDAOFilesystem;
}(filesystemContainer_1.default));
exports.default = new CartDAOFilesystem();
//# sourceMappingURL=daoCartFilesystem.js.map