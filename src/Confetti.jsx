import React from "react";
import Confetti from "react-confetti";

export default () => {
  const width = window.innerWidth - 20;
  const height = window.innerHeight * 2;
  return <Confetti width={width} height={height} />;
};
