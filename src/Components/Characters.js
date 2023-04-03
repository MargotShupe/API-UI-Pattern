import React from "react";
import "./Characters.css";
import { useState } from "react";

function Characters({ characters }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="nav-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Rick Sanchez
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Morty Smith
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Summer Smith
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Beth Smith
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Jerry Smith
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Abadango Cluster
        </button>
        <button
          className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(7)}
        >
          Abradolf Lincler
        </button>
        <button
          className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(8)}
        >
          Adjudicator Rick
        </button>
        <button
          className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(9)}
        >
          Agency Director
        </button>
        <button
          className={toggleState === 10 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(10)}
        >
          Alan Rails
        </button>
      </div>
      <div className="content-tabs">
        {characters.map((item, index) => (
          <div key={index} className="content-tabs">
            <div
              className={
                toggleState === index + 1
                  ? "content  active-content"
                  : "content"
              }
            >
              <img src={item.image} alt="" />
              <p>{item.status}</p>
              <p>{item.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
