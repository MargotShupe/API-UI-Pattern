import React, { useState } from "react";
import Characters from "./Characters";

function Modal() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <div className="card" data-id={Characters.id} onClick={handleClick}>
      {modal && (
        <div className="modal">
          <article className="modal-content">
            <i className="modal-close fas fa-times"></i>
            <div className="modal-a">
              <img
                src={
                  Characters.image ||
                  "https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading..."
                }
                alt={Characters.name}
              />
            </div>
            <div className="modal-b">
              <h2>{Characters.name}</h2>

              <div className="modal-details">
                <span>Gender: </span>
                <span>{Characters.gender}</span>
              </div>
              <div className="modal-details">
                <span>Species: </span>
                <span>{Characters.species}</span>
              </div>
              <div className="modal-details">
                <span>Status: </span>
                <span>{Characters.status}</span>
              </div>
              <div className="modal-details">
                <span>Origin: </span>
                <span>{Characters.origin ? Characters.origin.name : "-"}</span>
              </div>
              <div className="modal-details">
                <span>Location: </span>
                <span>
                  {Characters.location ? Characters.location.name : "-"}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
export default Modal;

/*const Card = () => {
  const [showPop, setShowPop] = useState(false);

  const handleClick = () => {
    if (showPop) {
      setShowPop(false);
    } else {
      setShowPop(true);
    }
  };

  return (
    <div className="card" data-id={Characters.id}>
      <img
        src={
          Characters.image ||
          "https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading..."
        }
        onClick={handleClick}
        alt={Characters.name}
        data-id={Characters.id}
      />

      {showPop && (
        <div className="popup">
          <article className="popup-content">
            <i className="popup-close fas fa-times" onClick={handleClick}></i>
            <div className="popup-a">
              <img
                src={
                  Characters.image ||
                  "https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading..."
                }
                alt={Characters.name}
              />
            </div>
            <div className="popup-b">
              <h2>{Characters.name}</h2>

              <div className="popup-details">
                <span>Gender: </span>
                <span>{Characters.gender}</span>
              </div>
              <div className="popup-details">
                <span>Species: </span>
                <span>{Characters.species}</span>
              </div>
              <div className="popup-details">
                <span>Status: </span>
                <span>{Characters.status}</span>
              </div>
              <div className="popup-details">
                <span>Origin: </span>
                <span>{Characters.origin ? Characters.origin.name : "-"}</span>
              </div>
              <div className="popup-details">
                <span>Location: </span>
                <span>
                  {Characters.location ? Characters.location.name : "-"}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default Card;
*/
/*function Modal() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <div className="card" data-id={Characters.id}>
      {modal && (
        <div className="modal">
          <article className="modal-content">
            <i className="modal-close fas fa-times" onClick={handleClick}></i>
            <div className="modal-a">
              <img
                src={
                  Characters.image ||
                  "https://via.placeholder.com/300x300/111217/FFFFFF/?text=Loading..."
                }
                alt={Characters.name}
              />
            </div>
            <div className="modal-b">
              <h2>{Characters.name}</h2>

              <div className="modal-details">
                <span>Gender: </span>
                <span>{Characters.gender}</span>
              </div>
              <div className="modal-details">
                <span>Species: </span>
                <span>{Characters.species}</span>
              </div>
              <div className="modal-details">
                <span>Status: </span>
                <span>{Characters.status}</span>
              </div>
              <div className="modal-details">
                <span>Origin: </span>
                <span>{Characters.origin ? Characters.origin.name : "-"}</span>
              </div>
              <div className="modal-details">
                <span>Location: </span>
                <span>
                  {Characters.location ? Characters.location.name : "-"}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
export default Modal;
*/
