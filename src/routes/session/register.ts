import { Router } from 'express';
import passport from 'passport';
import user from '../../models/schemas/userSchema';
import { SessionController } from '../../controllers';
import { upload } from '../../utils/multer';
import MailSender from '../../utils/nodemailer';

export const sessionSignup = Router();

sessionSignup.post(
  '/',
  passport.authenticate('signup', { failureRedirect: '/signup/failed', failureFlash: true }),
  async (req, res) => {
    const user = req.user;
    res.status(200).json({ message: 'User registered' });
    MailSender.newRegister(user);
  }
);

sessionSignup.get('/upload', SessionController.renderUpload);
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
    } catch (error) {
      console.log('Method update: ', error);
    }

    next();
  },
  SessionController.uploadSuccess
);
sessionSignup.get('/failed', SessionController.failedSignup);
