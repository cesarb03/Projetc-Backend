"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../utils/logger"));
var checkUserAuth = function (req, res, next) {
    try {
        if (req.isAuthenticated())
            return next();
        return res.render("unauthorized");
    }
    catch (err) {
        logger_1.default.error("Error has occured when checkUserAuth method, ".concat(err));
    }
};
exports.default = checkUserAuth;
//# sourceMappingURL=auth.js.map