"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    mongoDB: {
        URI: "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_CLUSTER, ".mongodb.net/").concat(process.env.DB_NAME, "?retryWrites=true&w=majority"),
    },
};
//# sourceMappingURL=config.js.map