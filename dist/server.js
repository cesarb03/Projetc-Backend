"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var wrongRoute_1 = __importDefault(require("./middlewares/wrongRoute"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.PORT;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.use(wrongRoute_1.default); //Middleware: checks not implemented route.
app.listen(port, function () {
    console.log("Server listening on port: ".concat(port));
});
//# sourceMappingURL=server.js.map