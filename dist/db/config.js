"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const persistence = process.argv[1] || process.env.PERSISTENCE || 1;
const persistence = 1;
const persistenceConfig = {
    MONGODB: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    PERSISTENCE: persistence,
};
exports.default = persistenceConfig;
//# sourceMappingURL=config.js.map