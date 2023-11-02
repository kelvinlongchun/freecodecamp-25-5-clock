import { useEffect, useRef } from "react";
import { useClockContext } from "../../../contexts/ClockContext";
import beep from "../../../sounds/beep.mp3";

const BeepSound = () => {
  const { state } = useClockContext();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (state.timeLeft === 0) {
      (audioRef.current as HTMLAudioElement).play();
    }
  }, [state.timeLeft]);

  return <audio ref={audioRef} id="beep" src={beep}></audio>;
};

export default BeepSound;
