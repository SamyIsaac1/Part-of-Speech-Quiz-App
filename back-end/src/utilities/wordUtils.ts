import { Word } from "../Interfaces/interfaces";

export function getRandomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

export function shuffleArray(array: Word[]): Word[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function filterByType(array: Word[], type: string): Word[] {
  return array.filter((word) => word.pos === type);
}
