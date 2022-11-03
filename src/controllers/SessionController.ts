import { Request, Response, NextFunction } from 'express';
import MailSender from '../utils/nodemailer';
import Logger from '../utils/logger';

class SessionController {
  constructor() {}
  // LOGIN
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.isAuthenticated()) next();
    } catch (err) {
      Logger.error(`Error when login method in SessionControllers, ${err}`);
    }
  }

  async renderLogin(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      res.redirect('/');
    } else {
      res.render('login');
    }
  }

  // LOGOUT
  async logout(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      const user = req.user;
      req.session.destroy(() => {
        res.render('logout', { user: user });
      });
    } else {
      res.redirect('/');
    }
  }

  // SIGNUP
  async renderSignUp(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      res.redirect('/');
    } else {
      res.render('signup');
    }
  }

  async signUp(req: Request, res: Response) {
    const user = req.user;
    res.status(201);
    MailSender.newRegister(user);
  }

  // FAILED SIGNUP
  async renderFailedSignup(req: Request, res: Response) {
    res.status(409).render('failedSignup', { message: req.flash('error')[0] });
  }

  // FAILED LOGIN
  async renderFailedLogin(req: Request, res: Response) {
    res.status(401).render('failedLogin', { message: req.flash('error')[0] });
  }

  // HOME
  async renderHome(req: Request, res: Response) {
    res.render('home', { user: req.user });
  }

  // UPLOAD
  async renderUpload(req: Request, res: Response) {
    if (req.isAuthenticated()) {
      res.render('upload');
    } else {
      res.render('login');
    }
  }

  // UPLOAD SUCCESS
  async uploadSuccess(req: Request, res: Response) {
    res.status(201).render('uploadSuccess');
  }

  // ADD_PRODUCTS_FORM
  async renderAddProdForm(req: Request, res: Response) {
    Logger.info(`${req.method} request to '${req.originalUrl}' route: Rendering add product form page.`);
    try {
      const user = req.user;
      res.status(200).render('add_products', { user: user });
    } catch (err) {
      Logger.error(err);
    }
  }
}

export default new SessionController();