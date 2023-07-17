"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByType = exports.shuffleArray = exports.getRandomNumber = void 0;
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
exports.getRandomNumber = getRandomNumber;
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffleArray = shuffleArray;
function filterByType(array, type) {
    return array.filter((word) => word.pos === type);
}
exports.filterByType = filterByType;
