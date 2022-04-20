"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessContactForm = exports.ProcessInqDelete = exports.DisplayInquiriesListPage = exports.DisplayContactPage = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Inquiries_1 = __importDefault(require("../Models/Inquiries"));
const index_1 = require("../Util/index");
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Form', messages: req.flash('InquiryMessage'), page: 'contactform', displayName: (0, index_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayInquiriesListPage(req, res, next) {
    Inquiries_1.default.find(function (err, inquiriesList) {
        if (err) {
            console.error("Error Encountered: " + err.message);
            res.end();
        }
        res.render('index', { title: 'Inquiries List', page: 'inquiries-list', Inquiries: inquiriesList, displayName: (0, index_1.UserDisplayName)(req) });
        (0, index_1.DefaultAuthguardRoute)();
    });
}
exports.DisplayInquiriesListPage = DisplayInquiriesListPage;
function ProcessInqDelete(req, res, next) {
    let id = req.params.id;
    Inquiries_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/inquiries-list');
    });
}
exports.ProcessInqDelete = ProcessInqDelete;
function ProcessContactForm(req, res, next) {
    let newInquiry = new Inquiries_1.default({
        "FullName": req.body.fullName,
        "PhoneNumber": req.body.phoneNumber,
        "EmailAddress": req.body.emailAddress,
        "Message": req.body.message
    });
    Inquiries_1.default.create(newInquiry, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        req.flash('InquiryMessage', 'Message successfully sent');
        res.redirect('/contactform');
    });
}
exports.ProcessContactForm = ProcessContactForm;
//# sourceMappingURL=inquiries-list.js.map