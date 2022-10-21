"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const index_1 = __importDefault(require("./routes/index"));
// Server Config
const config_1 = __importDefault(require("./db/config"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const logger_1 = __importDefault(require("./utils/logger"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("./utils/passport");
const connect_flash_1 = __importDefault(require("connect-flash"));
//GraphQL
const express_graphql_1 = require("express-graphql");
const graphProductSchema_1 = __importDefault(require("./graphQl/graphProductSchema"));
const graphProductController_1 = require("./graphQl/graphProductController");
// DOTENV
dotenv_1.default.config();
const port = process.env.PORT || 8080;
// SERVER
const app = (0, express_1.default)();
const cpus = os_1.default.cpus();
if (process.argv[3] === 'cluster' && cluster_1.default.isPrimary) {
    logger_1.default.info(`Number of CPUs: ${cpus}`);
    logger_1.default.info(`Master PID ${process.pid} is running`);
    cpus.map(() => {
        cluster_1.default.fork();
    });
    cluster_1.default.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster_1.default.fork();
    });
}
else {
    const serverExpress = app.listen(process.env.PORT || 8080, () => {
        logger_1.default.info(`Server listening on port ${port}.`);
    });
    serverExpress.on('error', (err) => logger_1.default.error(`An error has ocurred when starting: ${err}`));
}
// MIDDLEWARES
app.use(express_1.default.static(path_1.default.join(__dirname, '../uploads')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// CONFIGURACION MOTOR DE PLANTILLAS EJS
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
app.use((0, express_session_1.default)({
    store: connect_mongo_1.default.create({
        mongoUrl: config_1.default.MONGODB,
        mongoOptions,
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 600000,
    },
}));
// PASSPORT
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((0, connect_flash_1.default)());
(0, passport_2.passportLoad)(passport_1.default);
//GraphQL
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: graphProductSchema_1.default,
    rootValue: {
        getProduct: graphProductController_1.graphProductController.getProduct,
        getAll: graphProductController_1.graphProductController.getAll,
        addProduct: graphProductController_1.graphProductController.addProduct,
        updateProduct: graphProductController_1.graphProductController.updateProduct,
        deleteProduct: graphProductController_1.graphProductController.deleteProduct,
    },
    graphiql: true,
}));
// ROUTES
app.use('/', index_1.default);
//# sourceMappingURL=server.js.map