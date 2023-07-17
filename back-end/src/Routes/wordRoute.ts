import express, { Router } from "express";
import { getWords } from "../Controllers/wordController";

const router: Router = express.Router();

router.route("/api/words").get(getWords);

export default router;