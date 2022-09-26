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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../../../utils/logger"));
var mongoDbContainer_1 = __importDefault(require("../../container/mongoDbContainer"));
var cartSchema_1 = __importDefault(require("../../schemas/cartSchema"));
var CartsDAOMongoDB = /** @class */ (function (_super) {
    __extends(CartsDAOMongoDB, _super);
    function CartsDAOMongoDB() {
        return _super.call(this, cartSchema_1.default) || this;
    }
    CartsDAOMongoDB.prototype.createNewCart = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cart = new this.model({ user: user.id, products: [] });
                        return [4 /*yield*/, cart.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartsDAOMongoDB.prototype.cartDeleteById = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, cartProductsDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findOne({ user: user.id })];
                    case 1:
                        cart = _a.sent();
                        if (!(cart === null)) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, this.model.updateOne({ _id: cart._id }, {
                            $set: {
                                products: [],
                            },
                        })];
                    case 3:
                        cartProductsDelete = _a.sent();
                        if (cartProductsDelete.modifiedCount === 0) {
                            logger_1.default.error('Products not deleted from cart');
                        }
                        else {
                            logger_1.default.info('Products deleted from cart');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartsDAOMongoDB.prototype.getProductsByCartId = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, foundItemsInCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findOne({ user: user.id })];
                    case 1:
                        cart = _a.sent();
                        if (cart === null) {
                            return [2 /*return*/, { error: 'Cart not found' }];
                        }
                        else {
                            foundItemsInCart = cart.products;
                            logger_1.default.info("Cart: ".concat(foundItemsInCart));
                            return [2 /*return*/, foundItemsInCart];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CartsDAOMongoDB.prototype.addProductsById = function (product, user) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, newCartProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findOne({ user: user.id })];
                    case 1:
                        cart = _a.sent();
                        if (!(cart === null)) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, this.model.updateOne({ _id: cart._id }, {
                            $push: {
                                products: product,
                            },
                        })];
                    case 3:
                        newCartProduct = _a.sent();
                        if (newCartProduct.modifiedCount === 0) {
                            logger_1.default.error('Product not added to cart');
                        }
                        else {
                            logger_1.default.info('Product added to cart');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartsDAOMongoDB.prototype.deleteProductByCartId = function (user, product) {
        return __awaiter(this, void 0, void 0, function () {
            var cart, deleteCartProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findOne({ user: user.id })];
                    case 1:
                        cart = _a.sent();
                        if (!(cart === null)) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, this.model.updateOne({ _id: cart._id }, {
                            $pull: {
                                products: { id: product.id },
                            },
                        })];
                    case 3:
                        deleteCartProduct = _a.sent();
                        if (deleteCartProduct.modifiedCount === 0) {
                            logger_1.default.error('Product not deleted from cart');
                        }
                        else {
                            logger_1.default.info('Product deleted from cart');
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CartsDAOMongoDB;
}(mongoDbContainer_1.default));
exports.default = new CartsDAOMongoDB();
//# sourceMappingURL=daoCartMongoDb.js.map