import express, { Express, Request, Response, NextFunction } from "express";
import { calculateRank } from "../Controllers/rankController";

const router = express.Router();

router.route("/api/rank").post(calculateRank);

export default router;
