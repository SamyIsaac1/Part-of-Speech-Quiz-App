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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
describe("Test endpoint responses", () => {
    it("should get a successful response from GET /api/words", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/words");
        expect(response.status).toBe(200);
    }));
    it("should get a successful response from POST /api/rank", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post("/api/rank").send({ finalScore: 30 });
        expect(response.status).toBe(200);
    }));
    it("should get the correct rank from POST /api/rank with score 90", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post("/api/rank").send({ finalScore: 90 });
        const { rank } = response.body.data;
        expect(rank).toBe(80);
    }));
});
