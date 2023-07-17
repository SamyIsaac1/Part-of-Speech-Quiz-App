import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "./../assets/notFound.png"
export default function NotFound() {
  return (
    <>
      <div className="container flex-center not-found">
          <div>
            <h3>Uh - Oh , i think you're lost.</h3>
            <p>
              Pack your map, bring all equipments. We are going to turn back
              time, and don't forget to
              <span> follow the signal</span>
            </p>
            <div>
              <Link to={"/"}>
                <button>
                <i className="fa-solid fa-house text-danger pe-2"></i> home
                </button>
              </Link>
            </div>
          </div>
          
          <img src={notFoundImg} alt="not found"/>
        
      </div>
    </>
  );
}
