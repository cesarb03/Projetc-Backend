"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 70,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 200,
    },
    photoURL: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
    },
    stock: {
        type: Number,
        required: false,
        min: 0,
    },
    timestamp: {
        type: String,
        required: false,
        default: new Date().toLocaleString(),
    },
});
exports.default = mongoose_1.default.model('products', ProductSchema);
//# sourceMappingURL=productSchema.js.map