"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.DisplayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function AuthGuard(req, Res, next) {
    if (!req.isAuthenticated()) {
        return Res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=index.js.map