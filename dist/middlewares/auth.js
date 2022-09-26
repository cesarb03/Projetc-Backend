"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    return res.render('unauthorized');
};
exports.default = auth;
//# sourceMappingURL=auth.js.map