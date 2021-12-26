import React, { useRef, useEffect } from "react";
import M from "materialize-css";

const PlayGameModal = ({ fightWinner }) => {
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  return (
    <>
      <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
        <div className="modal-content ">
          <h2>Congratulations... </h2>
          <h2>The Winner is {fightWinner}!</h2>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-action modal-close waves-effect waves-green btn-flat"
          >
            Close
          </a>
        </div>
      </div>{" "}
    </>
  );
};

export default PlayGameModal;
