import express from 'express';
import session from 'express-session';
import indexRouter from './routes/index';
// Server Config
import { config } from './db/config';
import MongoStore from 'connect-mongo';
import path from 'path';
import cluster from 'cluster';
import os from 'os';
// Socket
import { Server as IOServer } from 'socket.io';
import Logger from './utils/logger';
import passport from 'passport';
import { passportLoad } from './utils/passport';
import flash from 'connect-flash';
// Middlewares
import errorHandler from './middlewares/errorHandler';
import wrongRoute from './middlewares/wrongRoute';
import ChatService from './services/ChatService';

declare module 'express-session' {
  export interface SessionData {
    logged: boolean;
    contador: number;
    user: string;
    admin: boolean;
  }
}

const port = config.PORT || 8080;
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
}

const serverExpress = app.listen(process.env.PORT || 8080, () => {
  Logger.info(`Server listening on port ${port}.`);
});
serverExpress.on('error', (err) => Logger.error(`An error has ocurred when starting: ${err}`));

// MIDDLEWARES
app.use(express.static(path.join(__dirname, '../public')));
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
      mongoUrl: config.MONGODB,
      mongoOptions,
    }),
    secret: config.SECRET_KEY as string,
    resave: false,
    saveUninitialized: false,
    rolling: true, // Reinicia el tiempo de expiracion con cada request
    cookie: {
      maxAge: Number(config.SESSION_TIME),
    },
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passportLoad(passport);

// ROUTES
app.use('/', indexRouter);

//SOCKET
const io = new IOServer(serverExpress);

io.on('connection', async (socket) => {
  Logger.info(`New user connected: ${socket.id}`);
  let messagesArray = await ChatService.getMessages();

  socket.emit('server:message', messagesArray);

  try {
    socket.on('client:message', async (newMessage) => {
      try {
        await ChatService.addMessage(newMessage);
        messagesArray = await ChatService.getMessages();
      } catch (err) {
        Logger.error(`Error in addMessage socket method: ${err}`);
      }

      io.emit('server:message', messagesArray);
    });
  } catch (err) {
    Logger.error(`Error at receiving client:message socket method: ${err}`);
  }
});

// EXTRA ERRORs HANDLER
app.use(errorHandler);

// WRONG ROUTE
app.use(wrongRoute);
