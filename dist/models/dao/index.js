"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartDao = exports.productDao = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var productDao;
exports.productDao = productDao;
var cartDao;
exports.cartDao = cartDao;
switch (process.env.DB_PROVIDER) {
    case 'mongodb':
        Promise.resolve().then(function () { return __importStar(require('./products/daoProductsMongoDb')); }).then(function (dao) { return (exports.productDao = productDao = dao.default); });
        Promise.resolve().then(function () { return __importStar(require('./cart/daoCartMongoDb')); }).then(function (dao) { return (exports.cartDao = cartDao = dao.default); });
        break;
    case 'firebase':
        Promise.resolve().then(function () { return __importStar(require('./products/daoProductsFirebase')); }).then(function (dao) { return (exports.productDao = productDao = dao.default); });
        Promise.resolve().then(function () { return __importStar(require('./cart/daoCartFirebase')); }).then(function (dao) { return (exports.cartDao = cartDao = dao.default); });
        break;
    case 'fs':
        Promise.resolve().then(function () { return __importStar(require('./products/daoProductsFilesystem')); }).then(function (dao) { return (exports.productDao = productDao = dao.default); });
        Promise.resolve().then(function () { return __importStar(require('./cart/daoCartFilesystem')); }).then(function (dao) { return (exports.cartDao = cartDao = dao.default); });
        break;
    default:
        exports.productDao = productDao = require('./products/daoProductsMongoDb');
        exports.cartDao = cartDao = require('./cart/daoCartMongoDb');
        break;
}
//# sourceMappingURL=index.js.map