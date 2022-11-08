import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  // products: [{ type: Object, required: true, ref: 'products' }],
  // user: { id: { type: String, required: true }, email: { type: String, required: true } },
  products: [{ prod_id: { type: String, required: true }, quantity: { type: Number }, _id: false }],
  user_id: { type: String, required: true },
  user_email: { type: String, required: true },

  timestamp: {
    type: String,
    required: true,
    default: new Date().toLocaleString(),
  },
});

export default mongoose.model('carts', CartSchema);
