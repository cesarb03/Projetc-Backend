import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  products: [{ type: Object, required: true, ref: 'products' }],
  user: { id: { type: String, required: true }, email: { type: String, required: true } },
  // user: { type: String, required: true },
  timestamp: {
    type: Number,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model('carts', CartSchema);
