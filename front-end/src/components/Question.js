import React from "react";

export default function Question({ questionNumber, timer, word }) {
  return (
    <div className="question">
      <div>
        <h1>{questionNumber}. What Part of Speech is this word?</h1>
        <h2 style={{ color: timer <= 5 ? "red" : "" }}>
          00:{timer > 9 ? timer : `0${timer}`}{" "}
          <i
            className="fa-solid fa-stopwatch"
            style={{ color: timer <= 5 ? "red" : "" }}
          ></i>
        </h2>
      </div>
      <p className="word">{word}</p>
    </div>
  );
}
