"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRank = void 0;
const data_1 = require("../data");
const calculateRank = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let lowerRanks = data_1.scoresList.filter((score) => score < request.body.score).length;
        let rank = ((lowerRanks / data_1.scoresList.length) * 100).toFixed(2);
        response.status(200).json({ message: "Done", data: rank });
    }
    catch (error) {
        next(error);
    }
});
exports.calculateRank = calculateRank;
