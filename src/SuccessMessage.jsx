import React from "react";
import "./SuccessMessage.css";
import Confetti from "./Confetti";

const SuccessMessage = () => {
  return (
    <div className="success__message">
      <Confetti />
      <div className="section__one">
        <h1 className="thats__right">
          That's right, Aami!!!!
          <br />
          You are
        </h1>
        <h1 className="nineteen">19</h1>
        <img className="cake__one" src="src/assets/cake.gif" alt="cake" />
        <a href="#section_two">
          <p className="scroll__down">Click here, please!😌</p>
        </a>
      </div>
      <div className="section__two" id="section_two">
        <h2 className="bday">Wish you a very happy birthday!</h2>
        <h2 className="last">
          and
          <br />
          Thank you for being a wonderful human being.
        </h2>
      </div>
    </div>
  );
};

export default SuccessMessage;
