import React, { useEffect, useState, useContext } from "react";
import ScoreContext from "./../context/score";
import ProgressBar from "../components/ProgressBar";
import Choice from "../components/Choice";
import { getWords } from "../api/dataApi";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

export default function Practice() {
  const [timer, setTimer] = useState(15);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const { score, setScore } = useContext(ScoreContext);
  const [progress, setProgress] = useState(0);
  const navigator = useNavigate();

  const choices = ["noun", "verb", "adverb", "adjective"];
  const definitions = [
    "Noun is a word that refers to a thing",
    "Verb is a word used to describe an action",
    "Adverb is a word that describes a verb",
    "Adjective is a word that describes a noun",
  ];
  const icons = [
    "fa-solid fa-house",
    "fa-solid fa-person-running",
    "fa-solid fa-file-circle-question",
    "fa-solid fa-heart-circle-check",
  ];

  useEffect(() => {
    // Getting words from the API
    getWords()
      .then((wordsList) => {
        setQuestions(wordsList.data);
        setCurrentQuestion(wordsList.data[0]);
        setProgress((progress) => progress + 10);
      })
      .catch((error) => console.log(error));

    if (timer > 0) {
      const id = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);

      return () => clearInterval(id);
    }
  }, []);

  const handleTimeUp = () => {
    // If the user reach to the last question, jump to the result
    if (questionNumber === questions.length) {
      navigator("/rank");
    } else {
      // reset time, answer, change question, and increment the progressbar
      setTimer(15);
      setCurrentQuestion(questions[questionNumber]);
      setQuestionNumber((n) => n + 1);
      setProgress((progress) => progress + 10);
      setAnswer("");
    }
  };

  // when Timer Change Check if the timer zero or not to move to the next question
  useEffect(() => {
    if (timer === 0) {
      handleTimeUp();
    }
  }, [timer]);

  const handleAnswer = (userAnswer) => {
    // If already choose an Answer stopping the user from answer again
    if (answer) return;
    setAnswer(userAnswer);
    // Hold 3 seconds to move to the next question
    if (timer > 3) setTimer(3);
    // If the answer was correct increment the score
    if (userAnswer === currentQuestion?.pos) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <div className="container">
        <h1>
          <i className="fa-solid fa-marker"></i> Part of Speech
        </h1>

      <ProgressBar progress={progress} />

      <Question
        timer={timer}
        questionNumber={questionNumber}
        word={currentQuestion?.word}
      />

      <div className="choices">
        {choices.map((choice, index) => (
          <Choice
            choice={choice}
            questionAnswer={currentQuestion?.pos}
            userAnswer={answer}
            onAnswer={handleAnswer}
            icon={icons[index]}
            definition={definitions[index]}
            key={choice}
          />
        ))}
      </div>
    </div>
  );
}
