import { useState } from "react";
import Question from "./Question";
import "./App.css";
import Success from "./Success";

function App() {
  const [inputval, setInputVal] = useState(0);
  const [flag, setFlag] = useState(false);

  console.log(inputval);

  const handleRedirect = () => {
    if (inputval === "19") {
      setFlag(true);
    } else {
      alert("Concentrate, Aami, Concentrate!!!");

      setAnswer("");
    }
  };

  return (
    <>
      {flag === false ? (
        <Question
          inputval={inputval}
          setInputVal={setInputVal}
          handleRedirect={handleRedirect}
        />
      ) : (
        <Success flag={flag} />
      )}
    </>
  );
}

export default App;
