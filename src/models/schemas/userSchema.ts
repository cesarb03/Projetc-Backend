import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import { User } from '../../interfaces/User';
import { CartController } from '../../controllers';
import { NextFunction } from 'express';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    picture: { type: String, required: false },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { collection: 'users' }
);

userSchema.pre('save', async function (next) {
  const user = this;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (err: any) {
    next(err);
  }
});

userSchema.post('save', async function (res: any, next: NextFunction) {
  try {
    const user = { id: this.id, email: this.email };
    await CartController.cartCreate(user, res);
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = async (reqPassword: string, password: string): Promise<boolean> => {
  return await bcryptjs.compareSync(reqPassword, password);
};

export default mongoose.model<User>('User', userSchema);
