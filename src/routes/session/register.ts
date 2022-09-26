import { Router } from 'express';
import passport from 'passport';
import user from '../../models/schemas/user';
import {
  renderSignUp,
  signUp,
  renderFailedSignup,
  renderUpload,
  uploadSuccess,
} from '../../controllers/sessionControllers';
import { upload } from '../../utils/multer';

export const sessionSignup = Router();

sessionSignup.get('/', renderSignUp);
sessionSignup.post(
  '/',
  passport.authenticate('signup', { failureRedirect: '/signup/failed', failureFlash: true }),
  signUp
);
sessionSignup.get('/upload', renderUpload);
sessionSignup.post(
  '/upload',
  upload.single('picture'),
  async (req: any, res: any, next: any) => {
    const file = req.file;
    if (!file) {
      const error = { message: 'Error when uploading file.', statusCode: 400 };
      return next(error);
    }

    try {
      const newData = {
        email: req.user.email,
        passport: req.user.password,
        address: req.user.address,
        age: req.user.age,
        phoneNumber: req.user.phoneNumber,
        picture: `${file.filename}`,
        isAdmin: req.user.isAdmin,
      };

      const updatedData = await user.updateOne({ _id: req.user.id }, newData);

      if (updatedData.matchedCount === 0) {
        const error = { message: 'User not found', statusCode: 400 };
        return next(error);
      }
    } catch (err) {
      console.log('Method update: ', err);
    }

    next();
  },
  uploadSuccess
);

sessionSignup.get('/failed', renderFailedSignup);
