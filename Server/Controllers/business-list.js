"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = exports.ProcessBusinessEditPage = exports.DisplayBusinessEditPage = exports.DisplayBusinessListPage = void 0;
const business_1 = __importDefault(require("../Models/business"));
const Util_1 = require("../Util");
function DisplayBusinessListPage(req, res, next) {
    business_1.default.find(function (err, businessCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'business-list', business: businessCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessListPage = DisplayBusinessListPage;
function DisplayBusinessEditPage(req, res, next) {
    let id = req.params.id;
    business_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.render('index', { title: "Contact Edit", page: "business-list-edit", business: contactItemToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessEditPage = DisplayBusinessEditPage;
function ProcessBusinessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedItem = new business_1.default({
        "_id": id,
        "Name": req.body.Name,
        "Contact": req.body.Contact,
        "Email": req.body.Email
    });
    business_1.default.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.ProcessBusinessEditPage = ProcessBusinessEditPage;
function DeleteContact(req, res, next) {
    let id = req.params.id;
    business_1.default.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.DeleteContact = DeleteContact;
//# sourceMappingURL=business-list.js.map