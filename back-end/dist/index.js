"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send('"Part of Speech');
});
app.get("/words", (req, res) => {
    res.send(wordList);
});
app.post("/rank", (req, res) => {
    let len = scoresList.filter((score) => score < req.body.score).length;
    let rank = ((len / scoresList.length) * 100).toFixed(2);
    res.send(rank);
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
let wordList = [
    {
        id: 1,
        word: "slowly",
        pos: "adverb",
    },
    {
        id: 2,
        word: "ride",
        pos: "verb",
    },
    {
        id: 3,
        word: "bus",
        pos: "noun",
    },
    {
        id: 4,
        word: "commute",
        pos: "verb",
    },
    {
        id: 5,
        word: "emissions",
        pos: "noun",
    },
    {
        id: 6,
        word: "walk",
        pos: "verb",
    },
    {
        id: 7,
        word: "fast",
        pos: "adjective",
    },
    {
        id: 8,
        word: "car",
        pos: "noun",
    },
    {
        id: 9,
        word: "crowded",
        pos: "adjective",
    },
    {
        id: 10,
        word: "arrival",
        pos: "noun",
    },
    {
        id: 11,
        word: "emit",
        pos: "verb",
    },
    {
        id: 12,
        word: "independent",
        pos: "adjective",
    },
    {
        id: 13,
        word: "convenient",
        pos: "adjective",
    },
    {
        id: 14,
        word: "lane",
        pos: "noun",
    },
    {
        id: 15,
        word: "heavily",
        pos: "adverb",
    },
];
let scoresList = [
    20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20, 10,
    60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
];
console.log();
