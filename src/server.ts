import express from 'express';
import session from 'express-session';
import indexRouter from './routes/index';
// Server Config
import persistenceConfig from './db/config';
import MongoStore from 'connect-mongo';
import path from 'path';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import Logger from './utils/logger';
import passport from 'passport';
import { passportLoad } from './utils/passport';
import flash from 'connect-flash';
//GraphQL
import { graphqlHTTP } from 'express-graphql';
import graphProductSchema from './graphQl/graphProductSchema';
import { graphProductController } from './graphQl/graphProductController';

declare module 'express-session' {
  export interface SessionData {
    logged: boolean;
    contador: number;
    user: string;
    admin: boolean;
  }
}

// DOTENV
dotenv.config();
const port = process.env.PORT || 8080;
// SERVER
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

// MIDDLEWARES
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
      mongoUrl: persistenceConfig.MONGODB,
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

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passportLoad(passport);

//GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphProductSchema,
    rootValue: {
      getProduct: graphProductController.getProduct,
      getAll: graphProductController.getAll,
      addProduct: graphProductController.addProduct,
      updateProduct: graphProductController.updateProduct,
      deleteProduct: graphProductController.deleteProduct,
    },
    graphiql: true,
  })
);

// ROUTES
app.use('/', indexRouter);
