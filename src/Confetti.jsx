import React from "react";
import Confetti from "react-confetti";

export default () => {
  const width = window.innerWidth - 20;
  const height = window.innerHeight * 3;
  return <Confetti width={width} height={height} />;
};
