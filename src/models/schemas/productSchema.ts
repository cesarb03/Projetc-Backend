import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
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
    minlength: 8,
    maxlength: 200,
  },
  stock: {
    type: Number,
    required: false,
    min: 0,
  },
  timestamp: {
    type: Number,
    required: false,
    default: Date.now,
  },
});

export default mongoose.model('products', ProductSchema);
