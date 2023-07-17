"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rankController_1 = require("../Controllers/rankController");
const router = express_1.default.Router();
router.route("/api/rank").post(rankController_1.calculateRank);
exports.default = router;
