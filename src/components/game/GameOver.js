import React from "react";
import GetUser from "../accounts/GetUser";

export function GameOverModal() {
  return (
    <div>
      {/* <!-- model2 --> */}
      <div
        className="modal fade"
        id="gmoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="gmoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="gmoModalLabel">
                Game Over
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Play again</h4>
              <p>And Support Game Store.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- model2 end --> */}
    </div>
  );
}

export function GameOver(setGameStart, setLoggedInStatus, setUser, setErrMes) {
  setGameStart(false);
  //btn play again
  //update cash
  GetUser(setLoggedInStatus, setUser, setErrMes);
  console.log("GameOver");
}

export default GameOverModal;
