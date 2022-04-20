"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inquiries_list_1 = require("../controllers/inquiries-list");
const router = express_1.default.Router();
const index_1 = require("../Util/index");
router.get('/contactform', inquiries_list_1.DisplayContactPage);
router.post('/contactform', inquiries_list_1.ProcessContactForm);
router.get('/inquiries-list', index_1.AuthGuard, inquiries_list_1.DisplayInquiriesListPage);
router.get('/inqdelete/:id', index_1.AuthGuard, inquiries_list_1.ProcessInqDelete);
exports.default = router;
//# sourceMappingURL=inquiries-list.js.map