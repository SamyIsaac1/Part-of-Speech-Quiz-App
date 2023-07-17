"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wordController_1 = require("../Controllers/wordController");
const router = express_1.default.Router();
router.route("/api/words").get(wordController_1.getWords);
exports.default = router;