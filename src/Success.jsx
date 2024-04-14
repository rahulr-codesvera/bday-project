import React from "react";
import { useRef, useEffect } from "react";
import SuccessMessage from "./SuccessMessage";

const Success = ({ flag }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    if (flag) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [flag]);
  return (
    <div>
      <SuccessMessage />
      <audio ref={audioRef} loop>
        <source
          src="/images/Leonard Cohen - Suzanne (Audio).mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Success;
