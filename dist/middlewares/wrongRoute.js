"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    if (!req.originalUrl.includes('/api/cart') || !req.originalUrl.includes('/api/products')) {
        return res.status(401).json({
            error: -2,
            msg: "".concat(req.method, ": ").concat(req.originalUrl, " --> Not implemented"),
        });
    }
    next();
});
//# sourceMappingURL=wrongRoute.js.map