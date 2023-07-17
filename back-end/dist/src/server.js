"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wordRoute_1 = __importDefault(require("./Routes/wordRoute"));
const rankRoute_1 = __importDefault(require("./Routes/rankRoute"));
const dotenv_1 = __importDefault(require("dotenv"));
// Environment variable
dotenv_1.default.config();
// setup express server
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// body-parser Middleware
app.use(express_1.default.json());
// Routes
app.get("/", (request, response) => {
    response.send("Part of Speech");
});
app.use(wordRoute_1.default);
app.use(rankRoute_1.default);
app.use((request, response) => response.status(404).json({ massage: "not found" }));
app.use((error, request, response, next) => {
    response.status(error.status || 500).json({ message: error.toString() });
});
exports.default = app;
