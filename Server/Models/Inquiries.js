"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const InquiriesSchema = new Schema({
    FullName: String,
    PhoneNumber: String,
    EmailAddress: String,
    Message: String
}, {
    collection: "inquiries"
});
const Model = mongoose_1.default.model("inquiries", InquiriesSchema);
exports.default = Model;
//# sourceMappingURL=Inquiries.js.map