"use strict";
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
exports.cartOrder = exports.deleteProductByCartId = exports.addToCartById = exports.getProductsByCartId = exports.cartDelete = exports.cartCreate = void 0;
var cartService_1 = require("../services/cartService");
var messaging_1 = __importDefault(require("../utils/messaging"));
var logger_1 = __importDefault(require("../utils/logger"));
var nodemailer_1 = __importDefault(require("../utils/nodemailer"));
//Esta funcion se ejecutará con el hook post declarado en el esquema del user, cuando se crea un user
var cartCreate = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, cartService_1.cartService.createNewCart(user)];
            case 1:
                _a.sent();
                logger_1.default.info("Cart created for user ".concat(user.email));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                logger_1.default.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.cartCreate = cartCreate;
var cartDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                return [4 /*yield*/, cartService_1.cartService.cartDeleteById(user)];
            case 1:
                _a.sent();
                res.redirect('/api/cart');
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                logger_1.default.error("Error in cartDeleteById method: ".concat(error_2));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.cartDelete = cartDelete;
var getProductsByCartId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, cartProducts, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                return [4 /*yield*/, cartService_1.cartService.getProductsByCartId(user)];
            case 1:
                cartProducts = _a.sent();
                res.render('cart', { products: cartProducts, user: user });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                logger_1.default.error(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProductsByCartId = getProductsByCartId;
var addToCartById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = req.body;
                user = req.user;
                return [4 /*yield*/, cartService_1.cartService.addProductsById(product, user)];
            case 1:
                _a.sent();
                res.redirect('/api/cart');
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                logger_1.default.error(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addToCartById = addToCartById;
var deleteProductByCartId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product, user, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                product = req.body;
                user = req.user;
                return [4 /*yield*/, cartService_1.cartService.deleteProductByCartId(user, product)];
            case 1:
                _a.sent();
                res.redirect('/api/cart');
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                logger_1.default.error(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProductByCartId = deleteProductByCartId;
var cartOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, cartProducts, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = req.user;
                return [4 /*yield*/, cartService_1.cartService.getProductsByCartId(user)];
            case 1:
                cartProducts = _a.sent();
                // await cartDao.cartDeleteById(user);
                nodemailer_1.default.newOrder(user, cartProducts);
                messaging_1.default.newSMS(user);
                messaging_1.default.newWhatsapp(user);
                res.redirect('/');
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                logger_1.default.error(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.cartOrder = cartOrder;
//# sourceMappingURL=cartControllers.js.map