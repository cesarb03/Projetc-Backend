import express from 'express';
import session from 'express-session';
import { sessionLogin, sessionSignup, sessionLogout, cartRouter, productsRouter, info } from './routes';
//Server Config
import config from './db/config';
import MongoStore from 'connect-mongo';
import path from 'path';
import wrongRoute from './middlewares/wrongRoute';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import Logger from './utils/logger';
import passport from 'passport';
import { passportLoad } from './utils/passport';
import flash from 'connect-flash';
import auth from './middlewares/auth';
import { getAll } from './controllers/productsControllers';
import compression from 'compression';

declare module 'express-session' {
  export interface SessionData {
    logged: boolean;
    contador: number;
    user: string;
    admin: boolean;
  }
}

//DOTENV
dotenv.config();
const port = process.env.PORT || 8080;
//SERVER
const app = express();
const cpus = os.cpus();

if (process.argv[3] === 'cluster' && cluster.isPrimary) {
  Logger.info(`Number of CPUs: ${cpus}`);
  Logger.info(`Master PID ${process.pid} is running`);

  cpus.map(() => {
    cluster.fork();
  });
  cluster.on('exit', (worker: any) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const serverExpress = app.listen(process.env.PORT || 8080, () => {
    Logger.info(`Server listening on port ${port}.`);
  });
  serverExpress.on('error', (err) => Logger.error(`An error has ocurred when starting: ${err}`));
}

//MIDDLEWARES
app.use(express.static(path.join(__dirname, '../uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURACION MOTOR DE PLANTILLAS EJS
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

const mongoOptions: any = { useNewUrlParser: true, useUnifiedTopology: true };
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: config.mongoDB.URI,
      mongoOptions,
    }),
    secret: process.env.SECRET_KEY as string,
    resave: false,
    saveUninitialized: false,
    rolling: true, // Reinicia el tiempo de expiracion con cada request
    cookie: {
      maxAge: 600000,
    },
  })
);

//PASSPORT
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passportLoad(passport);

//RUTAS

app.use('/login', sessionLogin);
app.use('/logout', sessionLogout);
app.use('/signup', sessionSignup);
app.use('/api', productsRouter, cartRouter);

app.get('/', auth, async (req, res: express.Response) => {
  const products = await getAll(req, res);
  res.render('home', { logged: true, user: req.user, products: products });
});

app.use('/info', info);
app.use('/infoCompressed', compression(), info);
