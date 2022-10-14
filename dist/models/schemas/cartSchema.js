"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CartSchema = new mongoose_1.default.Schema({
    products: [{ type: Object, required: true, ref: 'products' }],
    user: { id: { type: String, required: true }, email: { type: String, required: true } },
    timestamp: {
        type: Number,
        required: true,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model('carts', CartSchema);
//# sourceMappingURL=cartSchema.js.map