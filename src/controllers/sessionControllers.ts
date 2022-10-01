import { Request, Response, NextFunction } from 'express';
import MailSender from '../utils/nodemailer';
import Logger from '../utils/logger';

// LOGIN
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.isAuthenticated()) next();
  } catch (err) {
    Logger.error(`Error when login method in SessionControllers, ${err}`);
  }
};

export const renderLogin = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.render('login');
  }
};

// LOGOUT
export const logout = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    req.session.destroy(() => {
      res.render('logout', { user: user });
    });
  } else {
    res.redirect('/');
  }
};

// SIGNUP
export const renderSignUp = async (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
};

export const signUp = async (req: Request, res: Response) => {
  const user = req.user;
  res.status(201).render('createdUser', { user: user });
  MailSender.newRegister(user);
};

// FAILED SIGNUP
export const renderFailedSignup = async (req: Request, res: Response) => {
  res.status(409).render('failedSignup', { message: req.flash('error')[0] });
};

// FAILED LOGIN
export const renderFailedLogin = (req: Request, res: Response) => {
  res.status(401).render('failedLogin', { message: req.flash('error')[0] });
};

// HOME
export const renderHome = (req: Request, res: Response) => {
  res.render('home', { user: req.user });
};

// UPLOAD
export const renderUpload = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.render('upload');
  } else {
    res.render('login');
  }
};

// UPLOAD SUCCESS
export const uploadSuccess = async (req: Request, res: Response) => {
  res.status(201).render('uploadSuccess');
};

// ADD_PRODUCTS_FORM
export const renderAddProdForm = async (req: Request, res: Response) => {
  Logger.info(`${req.method} request to '${req.originalUrl}' route: Rendering add product form page.`);
  try {
    const user = req.user;
    res.status(200).render('add_products', { user: user });
  } catch (err) {
    Logger.error(err);
  }
};
