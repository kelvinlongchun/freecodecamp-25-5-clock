import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useClockContext, INITIAL_STATE } from "../../../contexts/ClockContext";

const Reset = () => {
  const { state, setState } = useClockContext();

  const handleClick = () => {
    if (state.interval !== null) {
      clearInterval(state.interval);
    }
    const audioElement = document.getElementById("beep") as HTMLAudioElement;
    if (!audioElement.paused) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    setState({ ...INITIAL_STATE });
  };

  return (
    <div id="reset" onClick={handleClick}>
      <FontAwesomeIcon icon={faRotateRight} />
    </div>
  );
};

export default Reset;
