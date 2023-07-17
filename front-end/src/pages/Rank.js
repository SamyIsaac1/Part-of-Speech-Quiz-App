import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScoreContext from "./../context/score";
import { getRank } from "../api/dataApi";

export default function Rank() {
  const { score, setScore } = useContext(ScoreContext); // Destructure the score from context
  const [rank, setRank] = useState(0);

  useEffect(() => {
    // Get Rank from the API
    getRank({ finalScore: score })
      .then((userRank) => {
        setRank(userRank.data.rank);
      })
      .catch((error) => console.log(error));
      // Reset Score for the next round 
    return () => {
      setScore(0);
    };
  }, []);

  return (
    <div className="small-container rank flex-center">
      <h1>
        Part of Speech <i className="fa-solid fa-marker"></i>{" "}
      </h1>
      <h1>
        Result <i className="fa-solid fa-ranking-star"></i>
      </h1>
      <div className="score-result flex-center">
        <p>
          Your Rank:{" "}
          <span
            style={{
              color: rank >= 80 ? "gold" : rank >= 70 ? "#9b9797" : "#cd7f32",
            }}
          >
            {rank}
          </span>{" "}
        </p>
        <i
          className="fa-solid fa-medal"
          style={{
            color: rank >= 80 ? "gold" : rank >= 70 ? "#9b9797" : "#cd7f32",
          }}
        ></i>
      </div>
      <p className="quote">
        Everything is within your power, and your power is within you.
      </p>
      <Link to="/start">
        <button>
          Try again <i className="fa-solid fa-rotate-right"></i>
        </button>
      </Link>
    </div>
  );
}
