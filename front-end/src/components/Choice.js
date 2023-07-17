import React from "react";

export default function Choice({
  choice,
  questionAnswer,
  userAnswer,
  onAnswer,
  icon,
  definition,
}) {
  const handleStyle = (userAnswer, questionAnswer, choice) => {
    if (userAnswer && userAnswer === choice) {
      return questionAnswer === userAnswer ? "green" : "red";
    } else {
      return "";
    }
  };

  const answerStatusColor = handleStyle(userAnswer, questionAnswer, choice);
  return (
    <div
      className="choice flex-center"
      title={definition}
      onClick={() => {
        onAnswer(choice);
      }}
      style={{
        borderColor: answerStatusColor,
      }}
    >
      <i className={icon} style={{ color: answerStatusColor }}></i>

      <span
        style={{
          color: answerStatusColor,
        }}
      >
        {choice}
      </span>
    </div>
  );
}
