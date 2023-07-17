import { Request, Response, NextFunction } from "express";
import { scoresList } from "./../data";

export const calculateRank = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let { finalScore } = request.body;

    // validate finalScore exists or not
    if (finalScore === undefined) throw new Error("finalScore Required");

    // to ensure finalScore is a number
    if (typeof finalScore !== "number") throw new Error("finalScore Should be a number");

    //  calculate the user's rank
    const countOfLowerRanks = scoresList.filter(
      (score) => score < finalScore
    ).length;

    const rank = (countOfLowerRanks / scoresList.length) * 100;
    const formattedRank = Number(rank.toFixed(2));

    response
      .status(200)
      .json({ message: "Done", data: { rank: formattedRank } });
  } catch (error) {
    next(error);
  }
};
