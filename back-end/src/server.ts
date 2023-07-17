import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import wordRoute from "./Routes/wordRoute";
import rankRoute from "./Routes/rankRoute";

// Environment variables
dotenv.config();

// setup express server
const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// body-parser Middleware
app.use(express.json());
// to parse incoming form data
app.use(express.urlencoded({ extended: false }));

// Enable CORS with various options.
app.use(cors());

// Routes
app.get("/", (request: Request, response: Response) => {
  response.send("Part of Speech");
});

app.use(wordRoute);
app.use(rankRoute);

// Not Found Route
app.use((request: Request, response: Response) =>
  response.status(404).json({ massage: "not found" })
);

// Handle Errors and Exceptions
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error.message)
    response.status(500).json({ message: error.message });
  }
);

export default app;
