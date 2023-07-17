import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="small-container start flex-center">
        <h1>
          Part of Speech <i className="fa-solid fa-marker"></i>
        </h1>
      <h1>Start Practice</h1>
      <Link to="/practice">
        <button>
          Start <i className="fa-solid fa-play"></i>
        </button>
      </Link>
    </div>
  );
}
