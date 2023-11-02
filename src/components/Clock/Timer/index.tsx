import { useClockContext } from "../../../contexts/ClockContext";

const Timer = () => {
  const { state } = useClockContext();

  const getTimeString = (time: number) => {
    const minute = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const second = (time % 60).toFixed(0).padStart(2, "0");
    return minute + ":" + second;
  };

  return (
    <div>
      <h2 id="timer-label">{state.isSession ? "Session" : "Break"}</h2>
      <div id="time-left">{getTimeString(state.timeLeft)}</div>
    </div>
  );
};

export default Timer;
