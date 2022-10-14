"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    if (!req.originalUrl.includes('/api/cart') || !req.originalUrl.includes('/api/products')) {
        return res.status(401).json({
            error: -2,
            msg: `${req.method}: ${req.originalUrl} --> Not implemented`,
        });
    }
    next();
};
//# sourceMappingURL=wrongRoute.js.map