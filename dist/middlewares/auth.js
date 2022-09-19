"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    var isAdmin = true; //? [String type]: It's value should be either 'true' or 'false'.
    if (!isAdmin) {
        return res.status(401).json({
            error: -1,
            msg: "".concat(req.method, ": ").concat(req.originalUrl, " --> Unauthorized"),
        });
    }
    next();
});
//# sourceMappingURL=auth.js.map