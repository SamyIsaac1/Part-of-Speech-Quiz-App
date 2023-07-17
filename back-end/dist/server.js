"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const wordRoute_1 = __importDefault(require("./Routes/wordRoute"));
const rankRoute_1 = __importDefault(require("./Routes/rankRoute"));
// Environment variables
dotenv_1.default.config();
// setup express server
const app = (0, express_1.default)();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// body-parser Middleware
app.use(express_1.default.json());
// to parse incoming form data
app.use(express_1.default.urlencoded({ extended: false }));
// Enable CORS with various options.
app.use((0, cors_1.default)());
// Routes
app.get("/", (request, response) => {
    response.send("Part of Speech");
});
app.use(wordRoute_1.default);
app.use(rankRoute_1.default);
// Not Found Route
app.use((request, response) => response.status(404).json({ massage: "not found" }));
// Handle Errors and Exceptions
app.use((error, request, response, next) => {
    console.log(error.message);
    response.status(500).json({ message: error.message });
});
exports.default = app;
