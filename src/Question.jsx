import React, { useEffect, useState } from "react";
import "./Question.css";

const Question = ({ inputval, setInputVal, handleRedirect }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const number = Math.floor(Math.random() * 19);
    setVal(number);
  }, []);
  return (
    <div className="question__container">
      <h3 className="question">Here's a simple question for you 😉</h3>
      <h1>{`${val}+${19 - val} = ?`}</h1>
      <input
        type="text"
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="submit__btn" onClick={() => handleRedirect()}>
        Submit
      </button>
    </div>
  );
};

export default Question;
