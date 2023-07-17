import { Request, Response, NextFunction } from "express";
import { wordList } from "./../data";
import { Word } from "../Interfaces/interfaces";
import {
  filterByType,
  getRandomNumber,
  shuffleArray,
} from "../utilities/wordUtils";

export const getWords = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let randomWords: Word[] = [];

    const verbs: Word[] = filterByType(wordList, "verb");
    const adverbs: Word[] = filterByType(wordList, "adverb");
    const nouns: Word[] = filterByType(wordList, "noun");
    const adjectives: Word[] = filterByType(wordList, "adjective");

    // Ensure words array includes at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
    randomWords.push(
      verbs[getRandomNumber(0, verbs.length - 1)],
      adverbs[getRandomNumber(0, adverbs.length - 1)],
      nouns[getRandomNumber(0, nouns.length - 1)],
      adjectives[getRandomNumber(0, adjectives.length - 1)]
    );

    // Add more words
    while (randomWords.length < 10) {
      // Get a new word
      const word = wordList[getRandomNumber(0, wordList.length - 1)];
      // Check if it's already exists or not
      const exists = randomWords.findIndex((w) => w.id === word.id);
      if (exists !== -1) continue;
      randomWords.push(word);
    }

    // Shuffle the Array one more time
    randomWords = shuffleArray(randomWords);

    response.status(200).json({
      message: "Done",
      data: randomWords,
    });
  } catch (error) {
    next(error);
  }
};
