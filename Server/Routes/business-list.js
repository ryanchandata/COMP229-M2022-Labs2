"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const business_list_1 = require("../Controllers/business-list");
const index_1 = require("../Util/index");
router.get('/business-list', index_1.AuthGuard, business_list_1.DisplayBusinessListPage);
router.get('/business-list-edit/:id', index_1.AuthGuard, business_list_1.DisplayBusinessEditPage);
router.get('/business-list/delete/:id', index_1.AuthGuard, business_list_1.DeleteContact);
exports.default = router;
//# sourceMappingURL=business-list.js.map