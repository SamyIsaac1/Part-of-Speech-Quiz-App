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
const data_1 = require("./../data");
const calculateRank = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { finalScore } = request.body;
        // validate finalScore exists or not
        if (finalScore === undefined)
            throw new Error("finalScore Required");
        // to ensure finalScore is a number
        if (typeof finalScore !== "number")
            throw new Error("finalScore Should be a number");
        //  calculate the user's rank
        const countOfLowerRanks = data_1.scoresList.filter((score) => score < finalScore).length;
        const rank = (countOfLowerRanks / data_1.scoresList.length) * 100;
        const formattedRank = Number(rank.toFixed(2));
        response
            .status(200)
            .json({ message: "Done", data: { rank: formattedRank } });
    }
    catch (error) {
        next(error);
    }
});
exports.calculateRank = calculateRank;
