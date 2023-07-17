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
exports.getWords = void 0;
const data_1 = require("./../data");
const wordUtils_1 = require("../utilities/wordUtils");
const getWords = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let randomWords = [];
        const verbs = (0, wordUtils_1.filterByType)(data_1.wordList, "verb");
        const adverbs = (0, wordUtils_1.filterByType)(data_1.wordList, "adverb");
        const nouns = (0, wordUtils_1.filterByType)(data_1.wordList, "noun");
        const adjectives = (0, wordUtils_1.filterByType)(data_1.wordList, "adjective");
        // Ensure words array includes at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
        randomWords.push(verbs[(0, wordUtils_1.getRandomNumber)(0, verbs.length - 1)], adverbs[(0, wordUtils_1.getRandomNumber)(0, adverbs.length - 1)], nouns[(0, wordUtils_1.getRandomNumber)(0, nouns.length - 1)], adjectives[(0, wordUtils_1.getRandomNumber)(0, adjectives.length - 1)]);
        // Add more words
        while (randomWords.length < 10) {
            // Get a new word
            const word = data_1.wordList[(0, wordUtils_1.getRandomNumber)(0, data_1.wordList.length - 1)];
            // Check if it's already exists or not
            const exists = randomWords.findIndex((w) => w.id === word.id);
            if (exists !== -1)
                continue;
            randomWords.push(word);
        }
        // Shuffle the Array one more time
        randomWords = (0, wordUtils_1.shuffleArray)(randomWords);
        response.status(200).json({
            message: "Done",
            data: randomWords,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getWords = getWords;
