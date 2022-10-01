"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var index_1 = __importDefault(require("./routes/index"));
//Server Config
var config_1 = __importDefault(require("./db/config"));
var connect_mongo_1 = __importDefault(require("connect-mongo"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var cluster_1 = __importDefault(require("cluster"));
var os_1 = __importDefault(require("os"));
var logger_1 = __importDefault(require("./utils/logger"));
var passport_1 = __importDefault(require("passport"));
var passport_2 = require("./utils/passport");
var connect_flash_1 = __importDefault(require("connect-flash"));
//DOTENV
dotenv_1.default.config();
var port = process.env.PORT || 8080;
//SERVER
var app = (0, express_1.default)();
var cpus = os_1.default.cpus();
if (process.argv[3] === 'cluster' && cluster_1.default.isPrimary) {
    logger_1.default.info("Number of CPUs: ".concat(cpus));
    logger_1.default.info("Master PID ".concat(process.pid, " is running"));
    cpus.map(function () {
        cluster_1.default.fork();
    });
    cluster_1.default.on('exit', function (worker) {
        console.log("Worker ".concat(worker.process.pid, " died"));
        cluster_1.default.fork();
    });
}
else {
    var serverExpress = app.listen(process.env.PORT || 8080, function () {
        logger_1.default.info("Server listening on port ".concat(port, "."));
    });
    serverExpress.on('error', function (err) { return logger_1.default.error("An error has ocurred when starting: ".concat(err)); });
}
//MIDDLEWARES
app.use(express_1.default.static(path_1.default.join(__dirname, '../uploads')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// CONFIGURACION MOTOR DE PLANTILLAS EJS
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
var mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
app.use((0, express_session_1.default)({
    store: connect_mongo_1.default.create({
        mongoUrl: config_1.default.mongoDB.URI,
        mongoOptions: mongoOptions,
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 600000,
    },
}));
//PASSPORT
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((0, connect_flash_1.default)());
(0, passport_2.passportLoad)(passport_1.default);
//ROUTES
app.use('/', index_1.default);
//# sourceMappingURL=server.js.map