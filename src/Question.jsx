import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Question.css";

const Question = ({ inputval, setInputVal, handleRedirect }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const number = Math.floor(Math.random() * 19);
    setVal(number);
  }, []);
  return (
    <div className="question__container">
      <span className="typewriter">
        <Typewriter
          words={[
            "Hello, Captain not-so-wise...",
            "Captain so-wise here!",
            "I know, this is not a surprise anymore",
            "But please act like you're surprised",
            "And solve this simple question :)",
          ]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={10}
          delaySpeed={3000}
        />
      </span>
      {/* <h3 className="question">Here's a simple question for you 😉</h3> */}
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
