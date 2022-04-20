"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultAuthguardRoute = exports.AuthGuard = exports.UserDisplayName = exports.CorrectAuthGuardPath = void 0;
exports.CorrectAuthGuardPath = 'business-contact-list';
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.DisplayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function AuthGuard(req, Res, next) {
    exports.CorrectAuthGuardPath = req.route.path;
    if (!req.isAuthenticated()) {
        return Res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
function DefaultAuthguardRoute() {
    exports.CorrectAuthGuardPath = 'business-contact-list';
}
exports.DefaultAuthguardRoute = DefaultAuthguardRoute;
//# sourceMappingURL=index.js.map