"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_list_1 = require("../controllers/contact-list");
const router = express_1.default.Router();
const index_1 = require("../Util/index");
router.get('/business-contact-list', index_1.AuthGuard, contact_list_1.DisplayBusinessContactPage);
router.get('/add', index_1.AuthGuard, contact_list_1.DisplayAddPage);
router.post('/add', index_1.AuthGuard, contact_list_1.ProcessAddPage);
router.get('/edit/:id', index_1.AuthGuard, contact_list_1.DisplayEditPage);
router.post('/edit/:id', index_1.AuthGuard, contact_list_1.ProcessEditPage);
router.get('/delete/:id', index_1.AuthGuard, contact_list_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=contact-list.js.map