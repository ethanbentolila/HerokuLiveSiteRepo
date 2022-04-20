"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBusinessContactPage = void 0;
const BusinessContact_1 = __importDefault(require("../Models/BusinessContact"));
const index_1 = require("../Util/index");
function DisplayBusinessContactPage(req, res, next) {
    BusinessContact_1.default.find(function (err, contactList) {
        if (err) {
            console.error("Error Encountered: " + err.message);
            res.end();
        }
        res.render('index', { title: 'Business Contact List', page: 'business-contact-list', contacts: contactList, displayName: (0, index_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessContactPage = DisplayBusinessContactPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: (0, index_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    BusinessContact_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: (0, index_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new BusinessContact_1.default({
        "ContactName": req.body.fullName,
        "ContactNumber": req.body.contactNumber,
        "ContactEmail": req.body.emailAddress
    });
    BusinessContact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new BusinessContact_1.default({
        "_id": id,
        "ContactName": req.body.fullName,
        "ContactNumber": req.body.contactNumber,
        "ContactEmail": req.body.emailAddress
    });
    BusinessContact_1.default.updateOne({ _id: id }, updatedContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    BusinessContact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map