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
var firebaseContainer_1 = __importDefault(require("../../container/firebaseContainer"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var daoProductsFirebase_1 = __importDefault(require("../products/daoProductsFirebase"));
var CartDAOFirebase = /** @class */ (function (_super) {
    __extends(CartDAOFirebase, _super);
    function CartDAOFirebase() {
        return _super.call(this, 'carts') || this;
    }
    CartDAOFirebase.prototype.createNewCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartCreated, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, firebase_admin_1.default
                                .firestore()
                                .collection(this.collection)
                                .add({ timestamp: Date.now(), products: [] })];
                    case 1:
                        cartCreated = _a.sent();
                        return [2 /*return*/, { cartCreated: cartCreated, msg: 'Cart succesfully created!' }];
                    case 2:
                        err_1 = _a.sent();
                        console.log('Method createNewCart: ', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CartDAOFirebase.prototype.checkIfCartExists = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var cartFound, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, firebase_admin_1.default.firestore().collection(this.collection).doc(id.toString())];
                    case 1:
                        cartFound = _a.sent();
                        return [4 /*yield*/, cartFound.get()];
                    case 2:
                        if ((_a.sent()).data() === undefined) {
                            return [2 /*return*/, false];
                        }
                        else {
                            return [2 /*return*/, cartFound];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.log('Method addToCartById: ', err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartDAOFirebase.prototype.cartDeleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedCart, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.checkIfCartExists(id)];
                    case 1:
                        selectedCart = _a.sent();
                        if (!selectedCart) {
                            return [2 /*return*/, -2];
                        }
                        else {
                            selectedCart.delete();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log('Method cartDeleteById: ', err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CartDAOFirebase.prototype.getProductsByCartId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedCart, cartProducts, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.checkIfCartExists(id)];
                    case 1:
                        selectedCart = _a.sent();
                        if (!!selectedCart) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, selectedCart.get()];
                    case 3:
                        cartProducts = (_a.sent()).data();
                        return [2 /*return*/, cartProducts];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CartDAOFirebase.prototype.addProductsById = function (id, id_prod) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedCart, productSelectedExists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.checkIfCartExists(id)];
                    case 1:
                        selectedCart = _a.sent();
                        if (!!selectedCart) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, daoProductsFirebase_1.default.checkProductInCollection(id_prod.id)];
                    case 3:
                        productSelectedExists = _a.sent();
                        if (productSelectedExists === true) {
                            selectedCart.update({
                                products: firebase_admin_1.default.firestore.FieldValue.arrayUnion(id_prod),
                            });
                            return [2 /*return*/, { msg: 'Product succesfully added.' }];
                        }
                        else {
                            return [2 /*return*/, { msg: 'Product not found in products collection.' }];
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CartDAOFirebase.prototype.deleteProductByCartId = function (id, id_prod) {
        return __awaiter(this, void 0, void 0, function () {
            var selectedCart, cartProducts, productSelected, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.checkIfCartExists(id)];
                    case 1:
                        selectedCart = _a.sent();
                        if (!!selectedCart) return [3 /*break*/, 2];
                        return [2 /*return*/, { error: 'Cart not found' }];
                    case 2: return [4 /*yield*/, selectedCart.get()];
                    case 3:
                        cartProducts = (_a.sent()).data();
                        productSelected = cartProducts.products.filter(function (object) {
                            return object.id === id_prod;
                        });
                        if (!(productSelected.length === 0)) return [3 /*break*/, 4];
                        return [2 /*return*/, { error: "Product id: ".concat(id_prod, " not found.") }];
                    case 4: return [4 /*yield*/, firebase_admin_1.default
                            .firestore()
                            .collection(this.collection)
                            .doc(id.toString())
                            .update({
                            products: firebase_admin_1.default.firestore.FieldValue.arrayRemove({ id: id_prod }),
                        })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { msg: 'Product succesfully deleted.' }];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return CartDAOFirebase;
}(firebaseContainer_1.default));
exports.default = new CartDAOFirebase();
//# sourceMappingURL=daoCartFirebase.js.map