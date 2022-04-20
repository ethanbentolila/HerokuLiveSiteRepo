"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinessContactSchema = new Schema({
    ContactName: String,
    ContactNumber: String,
    ContactEmail: String
}, {
    collection: "BusinessContact"
});
const Model = mongoose_1.default.model("BusinessContact", BusinessContactSchema);
exports.default = Model;
//# sourceMappingURL=BusinessContact.js.map